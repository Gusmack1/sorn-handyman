import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
const dir = path.resolve('public/gallery');
const files = (await fs.readdir(dir)).filter(f => f.endsWith('.webp') || f.endsWith('.jpg'));
let shrunk = 0;
for (const f of files) {
  const p = path.join(dir, f);
  const size = (await fs.stat(p)).size;
  if (size <= 200 * 1024) continue;
  const buf = await fs.readFile(p);
  let out;
  if (f.endsWith('.webp')) out = await sharp(buf).webp({ quality: 68, effort: 5 }).toBuffer();
  else out = await sharp(buf).jpeg({ quality: 72, mozjpeg: true, progressive: true }).toBuffer();
  await fs.writeFile(p, out);
  shrunk++;
  console.log(`shrunk ${f}: ${(size/1024).toFixed(0)}KB → ${(out.length/1024).toFixed(0)}KB`);
}
console.log(`done (${shrunk} files recompressed)`);
