#!/usr/bin/env node
/**
 * optimise-images.mjs
 *
 * Walks public/ and:
 *   - Compresses PNGs >500KB to smaller PNG + WebP + JPEG fallbacks.
 *   - For every PNG we care about (brand/hero.png, og.png, etc.) emits WebP
 *     and JPEG siblings regardless of size, so <picture> sources can use them.
 *   - Respects per-file profiles for quality/width overrides.
 *
 * Output: sibling files (hero.webp + hero.jpg next to hero.png).
 * Only replaces the original PNG if the re-encoded PNG is smaller.
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

// Per-file overrides. Paths relative to /public.
const PROFILES = {
  'brand/hero.png':           { maxWidth: 1920, webpQ: 78, jpegQ: 82, makeJpeg: true },
  'brand/og.png':             { maxWidth: 1200, webpQ: 82, jpegQ: 82, makeJpeg: true },
  'brand/fb-cover.png':       { maxWidth: 1640, webpQ: 82, jpegQ: 82, makeJpeg: true },
  'brand/sorn-logo.png':      { maxWidth: 1024, webpQ: 90, jpegQ: 88, makeJpeg: false },
  'brand/icon-source.png':    { maxWidth: 1024, webpQ: 90, jpegQ: 88, makeJpeg: false },
  'brand/trust-strip.png':    { maxWidth: 1600, webpQ: 82, jpegQ: 85, makeJpeg: true },
  'brand/ig-free-quotes.png': { maxWidth: 1200, webpQ: 80, jpegQ: 82, makeJpeg: true },
  'brand/pattern-tile.png':   { maxWidth: 1024, webpQ: 80, jpegQ: 82, makeJpeg: false },
};

const DEFAULT_PROFILE = { maxWidth: 1600, webpQ: 80, jpegQ: 82, makeJpeg: true };
const LARGE_PNG_THRESHOLD = 500 * 1024; // only re-encode PNGs bigger than this by default

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else yield full;
  }
}

function rel(abs) {
  return path.relative(PUBLIC_DIR, abs).replace(/\\/g, '/');
}

function fmtBytes(n) {
  if (n < 1024) return `${n}B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)}KB`;
  return `${(n / (1024 * 1024)).toFixed(2)}MB`;
}

async function processOne(abs) {
  const relPath = rel(abs);
  const lower = relPath.toLowerCase();
  if (!lower.endsWith('.png')) return null;

  const profile = PROFILES[relPath] ?? DEFAULT_PROFILE;
  const originalStat = await fs.stat(abs);
  const originalBytes = originalStat.size;

  const isExplicit = PROFILES[relPath] !== undefined;
  if (!isExplicit && originalBytes <= LARGE_PNG_THRESHOLD) {
    return { relPath, skipped: true, originalBytes };
  }

  const input = await fs.readFile(abs);
  const base = sharp(input, { failOn: 'none' }).rotate();
  const meta = await base.metadata();
  const width = meta.width ?? 0;
  const resizeOpts = width && width > profile.maxWidth
    ? { width: profile.maxWidth, withoutEnlargement: true }
    : null;

  const pngPipeline = sharp(input, { failOn: 'none' }).rotate();
  const webpPipeline = sharp(input, { failOn: 'none' }).rotate();
  const jpegPipeline = sharp(input, { failOn: 'none' }).rotate().flatten({ background: '#FBF8F2' });

  if (resizeOpts) {
    pngPipeline.resize(resizeOpts);
    webpPipeline.resize(resizeOpts);
    jpegPipeline.resize(resizeOpts);
  }

  const pngBuf = await pngPipeline
    .png({ compressionLevel: 9, palette: true, quality: 90, effort: 10 })
    .toBuffer();
  const webpBuf = await webpPipeline
    .webp({ quality: profile.webpQ, effort: 6, smartSubsample: true })
    .toBuffer();
  let jpegBuf = null;
  if (profile.makeJpeg) {
    jpegBuf = await jpegPipeline
      .jpeg({ quality: profile.jpegQ, mozjpeg: true, progressive: true })
      .toBuffer();
  }

  // Paths
  const dir = path.dirname(abs);
  const name = path.basename(abs, '.png');
  const webpPath = path.join(dir, `${name}.webp`);
  const jpegPath = path.join(dir, `${name}.jpg`);

  // Replace PNG only if we saved bytes
  let newPngBytes = originalBytes;
  let pngReplaced = false;
  if (pngBuf.byteLength < originalBytes) {
    await fs.writeFile(abs, pngBuf);
    newPngBytes = pngBuf.byteLength;
    pngReplaced = true;
  }

  await fs.writeFile(webpPath, webpBuf);
  if (jpegBuf) await fs.writeFile(jpegPath, jpegBuf);

  return {
    relPath,
    skipped: false,
    originalBytes,
    newPngBytes,
    pngReplaced,
    webpBytes: webpBuf.byteLength,
    jpegBytes: jpegBuf ? jpegBuf.byteLength : null,
  };
}

async function main() {
  const results = [];
  for await (const abs of walk(PUBLIC_DIR)) {
    if (!abs.toLowerCase().endsWith('.png')) continue;
    try {
      const r = await processOne(abs);
      if (r) results.push(r);
    } catch (err) {
      console.error(`  [error] ${rel(abs)} — ${err.message}`);
    }
  }

  // Print a report.
  console.log('\n=== Image optimisation report ===\n');
  let totalBefore = 0;
  let totalAfter = 0;
  for (const r of results) {
    if (r.skipped) {
      console.log(`skip    ${r.relPath}  (${fmtBytes(r.originalBytes)} <= threshold)`);
      continue;
    }
    totalBefore += r.originalBytes;
    totalAfter += (r.pngReplaced ? r.newPngBytes : r.originalBytes);
    const pngTag = r.pngReplaced
      ? `PNG ${fmtBytes(r.originalBytes)} -> ${fmtBytes(r.newPngBytes)}`
      : `PNG ${fmtBytes(r.originalBytes)} (kept)`;
    const webpTag = `WebP ${fmtBytes(r.webpBytes)}`;
    const jpegTag = r.jpegBytes != null ? ` | JPEG ${fmtBytes(r.jpegBytes)}` : '';
    console.log(`ok      ${r.relPath}  ${pngTag} | ${webpTag}${jpegTag}`);
  }
  console.log('');
  console.log(`PNG bytes total: ${fmtBytes(totalBefore)} -> ${fmtBytes(totalAfter)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
