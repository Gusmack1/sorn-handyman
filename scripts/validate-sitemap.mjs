#!/usr/bin/env node
// Validate dist/sitemap-*.xml post-build.
// Blocks the build on either of two regressions previously shipped to prod:
//
//  1. Dead-slug URLs — old /services/gardens, /services/electrical or
//     /services/flat-pack (without -assembly). These 404 on the live site
//     and must never re-appear in the sitemap.
//  2. Doubled BASE in <loc> — e.g. https://gusmack1.github.io/sorn-handyman/sorn-handyman/…
//     This is what the BreadcrumbList JSON-LD regression looked like; a
//     stray sitemap variant would point Googlebot at 404s for the same reason.
//
// The live canonical <loc> prefix is derived from astro.config.mjs (site + base)
// and emitted by @astrojs/sitemap, so we hardcode the one we expect and
// fail loudly on drift.
//
// Exit 0 if clean. Exit 1 on any match.

import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname.replace(/\/$/, '');
const EXPECTED_PREFIX = 'https://gusmack1.github.io/sorn-handyman/';

// Retracted / 404 slugs that must never re-enter the sitemap.
// Keep this list in lock-step with src/data/business.ts `services` + the
// post-launch 404 audit (claude_brain citations under tag `sorn-handyman`).
const DEAD_SLUG_PATTERNS = [
  /\/services\/gardens\b/,
  /\/services\/electrical\b/,
  // /services/flat-pack (but allow /services/flat-pack-assembly)
  /\/services\/flat-pack(?!-assembly)\b/,
];

const DOUBLED_BASE = /\/sorn-handyman\/sorn-handyman\//;

async function listSitemaps(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.isFile() && /^sitemap-.*\.xml$/.test(e.name)) out.push(join(dir, e.name));
  }
  return out;
}

function extractLocs(xml) {
  const locs = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xml))) locs.push(m[1]);
  return locs;
}

async function main() {
  const files = await listSitemaps(DIST);
  if (files.length === 0) {
    console.error('[sitemap-validator] no sitemap-*.xml found in dist/');
    process.exit(1);
  }

  const errors = [];
  let total = 0;

  for (const f of files) {
    const xml = await readFile(f, 'utf8');
    const locs = extractLocs(xml);
    total += locs.length;
    for (const loc of locs) {
      if (!loc.startsWith(EXPECTED_PREFIX)) {
        errors.push(`${f}: unexpected <loc> prefix — expected ${EXPECTED_PREFIX}, got ${loc}`);
      }
      if (DOUBLED_BASE.test(loc)) {
        errors.push(`${f}: doubled base path in <loc>: ${loc}`);
      }
      for (const pat of DEAD_SLUG_PATTERNS) {
        if (pat.test(loc)) {
          errors.push(`${f}: dead slug in <loc>: ${loc} (pattern ${pat})`);
        }
      }
    }
  }

  console.log(`[sitemap-validator] scanned ${files.length} sitemap file(s), ${total} <loc> entries`);
  if (errors.length) {
    console.error(`[sitemap-validator] ${errors.length} error(s):`);
    for (const e of errors) console.error('  - ' + e);
    process.exit(1);
  }
  console.log('[sitemap-validator] OK — no dead slugs, no doubled BASE');
}

main().catch((err) => {
  console.error('[sitemap-validator] fatal:', err);
  process.exit(1);
});
