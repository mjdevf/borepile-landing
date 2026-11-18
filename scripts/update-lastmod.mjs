#!/usr/bin/env node
/**
 * scripts/update-lastmod.mjs
 *
 * Menghasilkan scripts/lastmod.json dan menulis ulang <lastmod> di
 * public/sitemap.xml dari tanggal yang bisa dibuktikan.
 *
 * Sumber tanggal:
 *  - Artikel blog  : dateModified di JSON-LD halaman itu sendiri (otoritatif).
 *  - Beranda, /blog/, /borepile-terdekat/ : tanggal commit Git bila tersedia,
 *    jika tidak pakai nilai terakhir yang sudah ada di scripts/lastmod.json.
 *  - Halaman lokasi: TIDAK diberi lastmod, karena isinya berasal dari data
 *    bersama (locationContent.js) sehingga tidak ada tanggal per-kota yang
 *    jujur. Tambahkan secara eksplisit di scripts/lastmod-overrides.json
 *    hanya jika satu kota benar-benar diedit sendiri.
 *
 * Aturan penting: jangan pernah memakai tanggal hari ini sebagai fallback.
 * lastmod yang tidak akurat membuat Google mengabaikan lastmod seluruh situs.
 *
 * Jalankan 'npm run lastmod' sebelum commit perubahan konten.
 */

import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.join(__dirname, '..');
const LASTMOD_FILE = path.join(__dirname, 'lastmod.json');
const OVERRIDES_FILE = path.join(__dirname, 'lastmod-overrides.json');
const SITEMAP_FILE = path.join(REPO_ROOT, 'public', 'sitemap.xml');

function readJson(file, fallback = {}) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return fallback;
  }
}

function gitDateForFiles(files) {
  for (const f of files) {
    try {
      const out = execFileSync('git', ['log', '-1', '--format=%cs', '--', f], {
        cwd: REPO_ROOT,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim();
      if (/^\d{4}-\d{2}-\d{2}$/.test(out)) return out;
    } catch {
      // git tidak tersedia atau file belum pernah di-commit
    }
  }
  return null;
}

function dateModifiedFromHtml(file) {
  try {
    const html = fs.readFileSync(file, 'utf8');
    const m = html.match(/"dateModified"\s*:\s*"(\d{4}-\d{2}-\d{2})"/);
    return m ? m[1] : null;
  } catch {
    return null;
  }
}

const existing = readJson(LASTMOD_FILE);
const overrides = readJson(OVERRIDES_FILE);
const updated = {};

// 1. Halaman tunggal
updated['/'] = gitDateForFiles(['index.html', 'src/App.jsx']) || existing['/'] || null;
updated['/blog/'] = gitDateForFiles(['public/blog/index.html']) || existing['/blog/'] || null;
updated['/borepile-terdekat/'] =
  gitDateForFiles(['scripts/prerender.js', 'src/data/siteFacts.js']) ||
  existing['/borepile-terdekat/'] ||
  null;

// 2. Artikel blog: pakai dateModified di halaman
const blogDir = path.join(REPO_ROOT, 'public', 'blog');
if (fs.existsSync(blogDir)) {
  const blogFiles = fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith('.html') && f !== 'index.html')
    .sort();
  for (const file of blogFiles) {
    const url = `/blog/${file}`;
    updated[url] = dateModifiedFromHtml(path.join(blogDir, file)) || existing[url] || null;
  }
}

// 3. Override eksplisit (mis. satu halaman lokasi yang benar-benar diedit)
for (const [url, date] of Object.entries(overrides)) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) updated[url] = date;
}

// 4. Buang entri tanpa tanggal
const clean = {};
for (const url of Object.keys(updated).sort()) {
  if (updated[url]) clean[url] = updated[url];
}

fs.writeFileSync(LASTMOD_FILE, JSON.stringify(clean, null, 2) + '\n', 'utf8');

// 5. Sinkronkan public/sitemap.xml
if (fs.existsSync(SITEMAP_FILE)) {
  let xml = fs.readFileSync(SITEMAP_FILE, 'utf8');
  let added = 0;
  let removed = 0;
  xml = xml.replace(/<url>([\s\S]*?)<\/url>/g, (block) => {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
    if (!loc) return block;
    let pathname;
    try {
      pathname = new URL(loc).pathname;
    } catch {
      return block;
    }
    const date = clean[pathname];
    if (!date) {
      if (/<lastmod>/.test(block)) removed++;
      return block.replace(/\s*<lastmod>[^<]*<\/lastmod>/, '');
    }
    if (/<lastmod>/.test(block)) {
      return block.replace(/<lastmod>[^<]+<\/lastmod>/, `<lastmod>${date}</lastmod>`);
    }
    added++;
    return block.replace('</loc>', `</loc>\n    <lastmod>${date}</lastmod>`);
  });
  fs.writeFileSync(SITEMAP_FILE, xml, 'utf8');
  console.log(`📄 public/sitemap.xml: ${added} lastmod ditambahkan, ${removed} dihapus`);
}

console.log(`✅ scripts/lastmod.json diperbarui (${Object.keys(clean).length} URL)`);
