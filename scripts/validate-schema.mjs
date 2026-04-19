#!/usr/bin/env node
// Validate JSON-LD emitted into ./dist.
// Rules:
//   - every <script type="application/ld+json"> must parse
//   - no two LocalBusiness/HomeAndConstructionBusiness blocks on one page
//     may share the same @id (duplicate canonical business)
//   - every @id that is referenced (e.g. provider.@id) must exist somewhere
//     in the emitted graph, either on the same page or on the site-wide core
//     business node (/#business)
//   - at least one BreadcrumbList on every service/area/blog page
//   - at least one FAQPage on every service page
//   - at least one Service block on every service page
//
// Exit 0 with a summary if all pages pass; exit 1 on error.

import { readdir, readFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname.replace(/\/$/, '');
const SITE = 'https://gusmack1.github.io/sorn-handyman';
const CORE_BUSINESS_ID = `${SITE}/#business`;

async function walk(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.isFile() && e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

function extractJsonLd(html) {
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  const blocks = [];
  let m;
  while ((m = re.exec(html))) {
    const raw = m[1].trim();
    try {
      blocks.push({ raw, parsed: JSON.parse(raw) });
    } catch (err) {
      blocks.push({ raw, parseError: err.message });
    }
  }
  return blocks;
}

function collectTypes(node, acc) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) {
    for (const x of node) collectTypes(x, acc);
    return;
  }
  const t = node['@type'];
  if (t) {
    const types = Array.isArray(t) ? t : [t];
    for (const ty of types) acc.types.push(ty);
    if (node['@id']) acc.idsByType.push({ id: node['@id'], types });
  }
  if (node['@id']) acc.ids.add(node['@id']);
  // Collect referenced @ids (any { '@id': '...' } without @type siblings is a ref;
  // but for our schema we also count nested provider refs).
  for (const [k, v] of Object.entries(node)) {
    if (v && typeof v === 'object' && !Array.isArray(v) && v['@id'] && !v['@type']) {
      acc.refs.add(v['@id']);
    }
    collectTypes(v, acc);
  }
}

function analyzePage(file, html) {
  const blocks = extractJsonLd(html);
  const errors = [];
  const warnings = [];
  const acc = { types: [], ids: new Set(), idsByType: [], refs: new Set() };

  for (const [i, b] of blocks.entries()) {
    if (b.parseError) {
      errors.push(`[block ${i}] JSON parse error: ${b.parseError}`);
      continue;
    }
    collectTypes(b.parsed, acc);
  }

  // Check: duplicate LocalBusiness @id on a single page.
  const bizIds = acc.idsByType
    .filter((x) => x.types.some((t) => /LocalBusiness|HomeAndConstructionBusiness/.test(t)))
    .map((x) => x.id);
  const dupes = bizIds.filter((id, i) => bizIds.indexOf(id) !== i);
  if (dupes.length) {
    errors.push(`Duplicate LocalBusiness @id: ${[...new Set(dupes)].join(', ')}`);
  }

  // Check: unresolved @id refs. We resolve against (a) ids on the page and
  // (b) the site-wide core business @id which is emitted on every page.
  for (const ref of acc.refs) {
    if (!acc.ids.has(ref) && ref !== CORE_BUSINESS_ID) {
      warnings.push(`Unresolved @id ref: ${ref}`);
    }
  }

  const rel = relative(DIST, file).replaceAll(sep, '/');
  const isService = rel.startsWith('services/') && rel !== 'services/index.html';
  const isArea = rel.startsWith('areas/') && rel !== 'areas/index.html';
  const isBlogPost = rel.startsWith('blog/') && rel !== 'blog/index.html';

  if (isService || isArea || isBlogPost) {
    if (!acc.types.includes('BreadcrumbList')) {
      errors.push('Missing BreadcrumbList JSON-LD');
    }
  }
  if (isService) {
    if (!acc.types.includes('FAQPage')) errors.push('Missing FAQPage JSON-LD');
    if (!acc.types.includes('Service')) errors.push('Missing Service JSON-LD');
  }

  return { file: rel, errors, warnings, types: acc.types };
}

const files = await walk(DIST);
let hardErrors = 0;
let softWarnings = 0;
const typeCounts = new Map();

for (const f of files) {
  const html = await readFile(f, 'utf8');
  const r = analyzePage(f, html);
  for (const t of r.types) typeCounts.set(t, (typeCounts.get(t) || 0) + 1);
  if (r.errors.length) {
    hardErrors += r.errors.length;
    console.error(`\nFAIL ${r.file}`);
    for (const e of r.errors) console.error('  - ' + e);
  }
  if (r.warnings.length) {
    softWarnings += r.warnings.length;
    console.warn(`\nWARN ${r.file}`);
    for (const w of r.warnings) console.warn('  - ' + w);
  }
}

console.log('\n=== Schema type counts across dist/ ===');
for (const [t, n] of [...typeCounts.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${t.padEnd(34)} ${n}`);
}
console.log(`\nTotal pages scanned: ${files.length}`);
console.log(`Errors:   ${hardErrors}`);
console.log(`Warnings: ${softWarnings}`);
process.exit(hardErrors ? 1 : 0);
