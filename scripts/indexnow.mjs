#!/usr/bin/env node
// Pings IndexNow (Bing / Yandex) with every URL in dist/sitemap-*.xml.
// Silently skips if the custom domain isn't resolving yet.

import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const KEY = '4690968c9b675bdee408fbc5fa145109';
const HOST = 'sornhandyman.co.uk';
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');

async function domainLive() {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 4000);
  try {
    const res = await fetch(`https://${HOST}/`, { method: 'HEAD', signal: ctrl.signal, redirect: 'follow' });
    clearTimeout(t);
    return res.ok || (res.status >= 300 && res.status < 400);
  } catch {
    clearTimeout(t);
    return false;
  }
}

async function collectUrls() {
  let files;
  try {
    files = (await readdir(DIST)).filter((f) => f.startsWith('sitemap-') && f.endsWith('.xml'));
  } catch {
    return [];
  }
  const urls = new Set();
  for (const f of files) {
    const xml = await readFile(join(DIST, f), 'utf8');
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      urls.add(m[1].trim());
    }
  }
  return [...urls];
}

async function main() {
  const live = await domainLive();
  if (!live) {
    console.log('IndexNow: skipped, domain not pointed');
    return;
  }
  const urls = await collectUrls();
  if (!urls.length) {
    console.log('IndexNow: no sitemap URLs found, skipping');
    return;
  }
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    });
    console.log(`IndexNow: POSTed ${urls.length} URLs — HTTP ${res.status}`);
  } catch (err) {
    console.log(`IndexNow: ping failed — ${err.message}`);
  }
}

main().catch((e) => {
  console.log(`IndexNow: error — ${e.message}`);
  process.exit(0);
});
