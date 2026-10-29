#!/usr/bin/env node
/**
 * scripts/update-lastmod.mjs
 *
 * Menghasilkan dan memperbarui scripts/lastmod.json dari riwayat Git (git log -1 --format=%cs)
 * untuk setiap URL yang ada di sitemap.xml.
 *
 * PENTING: Jalankan 'npm run lastmod' sebelum commit perubahan konten baru.
 *
 * Keterbatasan git history:
 * Halaman lokasi (/location/:slug/) mendapatkan konten dari src/data/content.js dan template
 * src/components/sections/LocationPage.jsx. Karena konten seluruh kota digabung dalam content.js,
 * tanggal commit terakhir dari content.js + LocationPage.jsx digunakan sebagai tanggal lastmod
 * untuk semua halaman lokasi.
 */

import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';
import { locationPages } from '../src/data/content.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.join(__dirname, '..');
const LASTMOD_FILE = path.join(__dirname, 'lastmod.json');

function gitDateForFiles(files) {
  for (const f of files) {
    try {
      const out = execFileSync('git', ['log', '-1', '--format=%cs', '--', f], {
        cwd: REPO_ROOT,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim();
      if (/^\d{4}-\d{2}-\d{2}$/.test(out)) {
        return out;
      }
    } catch {
      // ignore
    }
  }
  return null;
}

let existing = {};
if (fs.existsSync(LASTMOD_FILE)) {
  try {
    existing = JSON.parse(fs.readFileSync(LASTMOD_FILE, 'utf8'));
  } catch {
    existing = {};
  }
}

const today = new Date().toISOString().slice(0, 10);
const updated = {};

// 1. Homepage
updated['/'] = gitDateForFiles(['index.html', 'src/App.jsx']) || existing['/'] || today;

// 2. Blog index
updated['/blog/'] = gitDateForFiles(['public/blog/index.html']) || existing['/blog/'] || today;

// 3. Location pages
const locationDate = gitDateForFiles(['src/data/content.js', 'src/components/sections/LocationPage.jsx']) || today;
for (const loc of locationPages) {
  const url = `/location/${loc.slug}/`;
  updated[url] = locationDate || existing[url] || today;
}

// 4. Blog articles
const blogDir = path.join(REPO_ROOT, 'public', 'blog');
if (fs.existsSync(blogDir)) {
  const blogFiles = fs.readdirSync(blogDir).filter((f) => f.endsWith('.html') && f !== 'index.html').sort();
  for (const file of blogFiles) {
    const url = `/blog/${file}`;
    const relFile = path.posix.join('public', 'blog', file);
    updated[url] = gitDateForFiles([relFile]) || existing[url] || today;
  }
}

fs.writeFileSync(LASTMOD_FILE, JSON.stringify(updated, null, 2) + '\n', 'utf8');
console.log(`✅ Successfully updated ${LASTMOD_FILE} (${Object.keys(updated).length} URLs)`);
