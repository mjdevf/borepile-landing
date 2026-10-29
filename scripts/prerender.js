import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';
import {
  locationPages,
  getLocationDetail,
  footer as footerData,
  navLinks,
  hero,
  trustBar,
  services as servicesData,
  about,
  faq as faqData,
} from '../src/data/content.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, '..', 'dist');
const REPO_ROOT = path.join(__dirname, '..');
const LASTMOD_FALLBACK_PATH = path.join(__dirname, 'lastmod.json');

function readLastmodFallback() {
  try {
    return JSON.parse(fs.readFileSync(LASTMOD_FALLBACK_PATH, 'utf8'));
  } catch {
    return {};
  }
}

function isFullGitClone() {
  try {
    const out = execFileSync('git', ['rev-parse', '--is-shallow-repository'], {
      cwd: REPO_ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return out === 'false';
  } catch {
    return false;
  }
}

function gitLastmodForFile(file) {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cs', '--', file], {
      cwd: REPO_ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : null;
  } catch {
    return null;
  }
}

function sourceFileForPath(pathname) {
  if (pathname === '/') return 'index.html';
  if (pathname === '/blog/') return 'public/blog/index.html';
  if (pathname.startsWith('/location/')) return 'src/data/content.js';
  if (pathname.startsWith('/blog/')) return path.posix.join('public', pathname.replace(/^\//, ''));
  return null;
}

function stripTags(s) {
  return String(s ?? '').replace(/<[^>]*>/g, '');
}

function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderLocationBody(loc) {
  const city = loc.city;
  const wa = '6281514811120';
  const waUrl = `https://api.whatsapp.com/send/?phone=${wa}&text=${encodeURIComponent(`Halo Majujaya, saya mau konsultasi bore pile di ${city}. Tolong info harga & survey lokasi gratis.`)}`;

  const services = (loc.services || []).map(
    (s) => `<li style="background:#f5f7fa;border:1px solid #e5e7eb;border-radius:8px;padding:12px 16px;"><strong>${esc(s)}</strong><br><span style="font-size:14px;color:#4b5563;">Layanan pengeboran ${esc(s.toLowerCase())} terpercaya di ${esc(city)} dan sekitarnya.</span></li>`
  ).join('');

  const area = (loc.areaCovered || []).map(
    (a) => `<span style="display:inline-block;background:#eef2ff;border:1px solid #c7d2fe;color:#3730a3;border-radius:999px;padding:6px 14px;font-size:14px;margin:4px;">${esc(a)}</span>`
  ).join('');

  const faqs = (loc.faq || []).map(
    (f) => `<details style="border:1px solid #e5e7eb;border-radius:8px;padding:14px 18px;margin-bottom:12px;background:#ffffff;"><summary style="font-weight:600;cursor:pointer;color:#0f172a;">${esc(f.q)}</summary><p style="line-height:1.7;margin-top:10px;color:#374151;">${esc(stripTags(f.a))}</p></details>`
  ).join('');

  const h1 = loc.headline || `Jasa Bore Pile & Strauss Pile di ${city} | Majujaya`;
  const detail = getLocationDetail(loc);
  const paras = detail.paragraph.split('\n\n').map((p) => `<p style="line-height:1.75;font-size:16px;margin-bottom:14px;color:#374151;">${esc(p)}</p>`).join('');

  const related = detail.others.map(
    (l) => `<a href="${l.href}" style="display:inline-block;background:#f5f7fa;border:1px solid #e5e7eb;border-radius:999px;padding:6px 14px;font-size:14px;margin:4px;color:#0f172a;text-decoration:none;">${esc(l.title)}</a>`
  ).join('');

  const allLocations = locationPages
    .filter((l) => l.slug !== loc.slug)
    .map((l) => `<a href="/location/${l.slug}/" style="display:inline-block;margin:4px 8px;color:#2563eb;text-decoration:none;font-size:14px;">Bore Pile ${esc(l.city)}</a>`)
    .join(' · ');

  const footLinks = [
    `<a href="/" style="color:#2563eb;text-decoration:none;">Beranda</a>`,
    ...navLinks.filter((l) => l.href !== '/#hero').map((l) => `<a href="${l.href}" style="color:#4b5563;text-decoration:none;">${esc(l.label)}</a>`),
    ...footerData.blogLinks.map((l) => `<a href="${l.href}" style="color:#4b5563;text-decoration:none;">${esc(l.title)}</a>`),
    ...footerData.serviceLinks.map((l) => `<a href="${l.href}" style="color:#4b5563;text-decoration:none;">${esc(l.title.trim())}</a>`),
  ].join(' · ');

  return `<main id="main-content" style="padding:40px 20px;font-family:system-ui,-apple-system,sans-serif;max-width:960px;margin:0 auto;color:#1e293b;">
    <nav aria-label="Breadcrumb" style="margin-bottom:20px;font-size:14px;color:#64748b;">
      <a href="/" style="color:#2563eb;text-decoration:none;font-weight:600;">Beranda</a> &rsaquo;
      <a href="/#layanan" style="color:#2563eb;text-decoration:none;">Layanan</a> &rsaquo;
      <span style="color:#475569;">Jasa Bore Pile ${esc(city)}</span>
    </nav>

    <h1 style="font-size:32px;line-height:1.3;margin-bottom:16px;color:#0f172a;">${esc(h1)}</h1>
    <p style="line-height:1.75;font-size:17px;color:#334155;margin-bottom:20px;">${esc(loc.intro)}</p>

    ${paras}

    <section style="margin-top:36px;">
      <h2 style="font-size:22px;margin-bottom:12px;color:#0f172a;">Karakteristik Tanah &amp; Informasi Geoteknik di ${esc(city)}</h2>
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:20px;line-height:1.75;color:#334155;">
        <p>${esc(loc.soilInfo)}</p>
      </div>
    </section>

    ${loc.foundationRecommendation ? `
    <section style="margin-top:36px;">
      <h2 style="font-size:22px;margin-bottom:12px;color:#0f172a;">Rekomendasi Jenis Pondasi di ${esc(city)}</h2>
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:20px;line-height:1.75;color:#334155;">
        <p>${esc(loc.foundationRecommendation)}</p>
      </div>
    </section>` : ''}

    <section style="margin-top:36px;">
      <h2 style="font-size:22px;margin-bottom:12px;color:#0f172a;">Layanan Bore Pile &amp; Strauss Pile di ${esc(city)}</h2>
      <ul style="list-style:none;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;">${services}</ul>
    </section>

    <section style="margin-top:36px;">
      <h2 style="font-size:22px;margin-bottom:12px;color:#0f172a;">Cakupan Wilayah Layanan di ${esc(city)}</h2>
      <p style="margin-bottom:12px;color:#475569;">Kami melayani seluruh kelurahan dan kecamatan di area ${esc(city)}, termasuk:</p>
      <div>${area}</div>
    </section>

    <section style="margin-top:36px;">
      <h2 style="font-size:22px;margin-bottom:12px;color:#0f172a;">Pertanyaan Umum (FAQ) Bore Pile di ${esc(city)}</h2>
      <div>${faqs}</div>
    </section>

    <section style="margin-top:36px;">
      <h2 style="font-size:22px;margin-bottom:12px;color:#0f172a;">Layanan Bore Pile di Wilayah Sekitar:</h2>
      <div>${related}</div>
      <div style="margin-top:16px;padding-top:16px;border-top:1px dashed #cbd5e1;">
        <p style="font-weight:600;margin-bottom:8px;font-size:14px;color:#475569;">Kami juga melayani wilayah lainnya di Jabodetabek &amp; Jawa Barat:</p>
        <div>${allLocations}</div>
      </div>
    </section>

    <section style="margin-top:40px;background:#0f172a;color:#ffffff;border-radius:8px;padding:32px;text-align:center;">
      <h2 style="font-size:24px;margin:0 0 12px;color:#ffffff;">Butuh Jasa Bore Pile Terpercaya di ${esc(city)}?</h2>
      <p style="margin:0 0 20px;color:#cbd5e1;line-height:1.6;">Konsultasikan spesifikasi bangunan dan kondisi tanah Anda bersama tim ahli kami. Survey lokasi GRATIS &amp; estimasi RAB detail tanpa biaya.</p>
      <a href="${waUrl}" style="background:#2563eb;color:#ffffff;padding:14px 28px;border-radius:6px;text-decoration:none;font-weight:700;display:inline-block;box-shadow:0 4px 12px rgba(37,99,235,0.3);">Chat via WhatsApp 0815-1481-1120</a>
    </section>

    <div style="margin-top:32px;">
      <a href="/" style="display:inline-block;padding:10px 20px;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:6px;color:#0f172a;text-decoration:none;font-weight:600;">&larr; Kembali ke Beranda Utama Majujaya</a>
    </div>

    <footer style="margin-top:36px;border-top:1px solid #e2e8f0;padding-top:20px;font-size:13px;line-height:1.8;color:#64748b;">
      <p style="font-weight:600;margin-bottom:8px;color:#334155;">Navigasi &amp; Tautan Halaman:</p>
      ${footLinks}
    </footer>
  </main>`;
}

function renderHomepageBody() {
  const wa = '6281514811120';
  const waUrl = `https://api.whatsapp.com/send/?phone=${wa}&text=${encodeURIComponent('Halo Majujaya, saya mau konsultasi jasa bore pile & survey lokasi gratis.')}`;

  const navHtml = navLinks.map(
    (l) => `<a href="${l.href}" style="margin:0 12px;color:#0f172a;text-decoration:none;font-weight:500;">${esc(l.label)}</a>`
  ).join('');

  const servicesHtml = servicesData.map(
    (s) => `<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:8px;padding:20px;">
      <h3 style="font-size:18px;margin-bottom:8px;color:#0f172a;">${esc(s.title)}</h3>
      <p style="line-height:1.6;font-size:14px;color:#475569;">${esc(s.desc)}</p>
      <a href="${s.link}" style="color:#2563eb;font-size:14px;font-weight:600;text-decoration:none;">Pelajari Layanan &rarr;</a>
    </div>`
  ).join('');

  const locationLinksHtml = locationPages.map(
    (l) => `<a href="/location/${l.slug}/" style="display:block;background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:12px 16px;color:#0f172a;text-decoration:none;font-weight:600;transition:border-color 0.2s;">
      Jasa Bore Pile ${esc(l.city)} &rarr;
    </a>`
  ).join('');

  const blogLinksHtml = footerData.blogLinks.map(
    (b) => `<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:8px;padding:16px;">
      <a href="${b.href}" style="color:#0f172a;text-decoration:none;font-weight:600;font-size:15px;line-height:1.4;display:block;">${esc(b.title)}</a>
      <span style="font-size:13px;color:#2563eb;margin-top:6px;display:inline-block;">Baca Artikel &rarr;</span>
    </div>`
  ).join('');

  const faqsHtml = faqData.map(
    (f) => `<details style="border:1px solid #e2e8f0;border-radius:8px;padding:16px 20px;margin-bottom:12px;background:#ffffff;"><summary style="font-weight:600;cursor:pointer;color:#0f172a;">${esc(f.q)}</summary><p style="line-height:1.7;margin-top:10px;color:#334155;">${esc(stripTags(f.a))}</p></details>`
  ).join('');

  const trustHtml = trustBar.items.map(
    (t) => `<div style="text-align:center;padding:12px;"><div style="font-size:28px;font-weight:800;color:#0f172a;">${esc(t.value)}${esc(t.suffix)}</div><div style="font-size:14px;color:#64748b;">${esc(t.label)}</div></div>`
  ).join('');

  return `<div style="font-family:system-ui,-apple-system,sans-serif;color:#0f172a;background:#ffffff;">
    <header style="border-bottom:1px solid #e2e8f0;padding:16px 24px;display:flex;align-items:center;justify-content:between;flex-wrap:wrap;gap:12px;">
      <a href="/" style="font-size:20px;font-weight:800;color:#0f172a;text-decoration:none;">${esc(footerData.company)}</a>
      <nav style="display:flex;flex-wrap:wrap;gap:8px;">${navHtml}</nav>
    </header>

    <main id="main-content" style="max-width:1100px;margin:0 auto;padding:40px 20px;">
      <section style="text-align:center;padding:40px 0 60px;">
        <h1 style="font-size:36px;line-height:1.25;font-weight:800;color:#0f172a;margin-bottom:20px;max-width:900px;margin-left:auto;margin-right:auto;">${esc(hero.headline)}</h1>
        <p style="font-size:18px;line-height:1.7;color:#475569;max-width:800px;margin:0 auto 28px;">${esc(hero.subheadline)}</p>
        <div style="display:flex;justify-content:center;gap:16px;flex-wrap:wrap;">
          <a href="${waUrl}" style="background:#2563eb;color:#ffffff;padding:14px 28px;border-radius:6px;text-decoration:none;font-weight:700;box-shadow:0 4px 12px rgba(37,99,235,0.3);">Chat via WhatsApp 0815-1481-1120</a>
          <a href="/#layanan" style="background:#f1f5f9;color:#0f172a;padding:14px 28px;border-radius:6px;text-decoration:none;font-weight:600;">Lihat Layanan Kami</a>
        </div>
      </section>

      <section style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:24px;margin-bottom:60px;">
        ${trustHtml}
      </section>

      <section id="layanan" style="margin-bottom:60px;">
        <h2 style="font-size:28px;font-weight:700;color:#0f172a;margin-bottom:12px;text-align:center;">Layanan Pondasi &amp; Pengeboran Tanah</h2>
        <p style="text-align:center;color:#64748b;max-width:650px;margin:0 auto 32px;">Solusi komprehensif mulai dari pengeboran tiang bore pile mesin, strauss pile manual, hingga investigasi tanah di seluruh Indonesia.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;">${servicesHtml}</div>
      </section>

      <section id="wilayah-layanan" style="margin-bottom:60px;">
        <h2 style="font-size:28px;font-weight:700;color:#0f172a;margin-bottom:12px;text-align:center;">Area &amp; Wilayah Layanan Pengeboran</h2>
        <p style="text-align:center;color:#64748b;max-width:700px;margin:0 auto 32px;">Kami melayani pekerjaan pondasi bore pile dan strauss pile di 16 wilayah kota dan kabupaten di Jabodetabek, Banten, dan Jawa Barat dengan survey lokasi gratis:</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;">${locationLinksHtml}</div>
      </section>

      <section id="tentang" style="margin-bottom:60px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:36px;">
        <h2 style="font-size:28px;font-weight:700;color:#0f172a;margin-bottom:16px;">${esc(about.title)}</h2>
        <p style="line-height:1.8;color:#334155;font-size:16px;margin-bottom:16px;">${esc(about.desc)}</p>
        <p style="line-height:1.8;color:#475569;font-size:15px;margin-bottom:24px;"><strong>Visi Perusahaan:</strong> ${esc(about.vision)}</p>
        <p style="line-height:1.8;color:#475569;font-size:14px;margin-bottom:24px;">${esc(about.legacyNote)}</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;">
          ${about.highlights.map((h) => `<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:8px;padding:16px;"><h4 style="font-size:16px;font-weight:700;color:#0f172a;margin-bottom:6px;">${esc(h.title)}</h4><p style="font-size:14px;line-height:1.6;color:#64748b;margin:0;">${esc(h.desc)}</p></div>`).join('')}
        </div>
      </section>

      <section id="faq" style="margin-bottom:60px;">
        <h2 style="font-size:28px;font-weight:700;color:#0f172a;margin-bottom:12px;text-align:center;">Pertanyaan yang Sering Diajukan (FAQ)</h2>
        <p style="text-align:center;color:#64748b;max-width:650px;margin:0 auto 32px;">Jawaban lengkap seputar biaya, estimasi waktu, metode pengerjaan, dan jaminan kualitas jasa bore pile Majujaya.</p>
        <div>${faqsHtml}</div>
      </section>

      <section id="blog" style="margin-bottom:60px;">
        <h2 style="font-size:28px;font-weight:700;color:#0f172a;margin-bottom:12px;text-align:center;">Artikel &amp; Panduan Seputar Pondasi</h2>
        <p style="text-align:center;color:#64748b;max-width:650px;margin:0 auto 32px;">Panduan teknis, tips memilih kontraktor, dan komparasi metode pondasi tiang untuk proyek Anda.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;">${blogLinksHtml}</div>
      </section>

      <section id="kontak" style="background:#0f172a;color:#ffffff;border-radius:12px;padding:40px;text-align:center;margin-bottom:40px;">
        <h2 style="font-size:28px;margin:0 0 12px;color:#ffffff;">Mulai Konsultasi Proyek Anda Sekarang</h2>
        <p style="max-width:650px;margin:0 auto 24px;color:#cbd5e1;line-height:1.6;">Diskusikan kebutuhan tiang bore pile, kedalaman titik, dan rancangan anggaran biaya (RAB) Anda. Survey lokasi dan konsultasi awal 100% GRATIS.</p>
        <a href="${waUrl}" style="background:#2563eb;color:#ffffff;padding:16px 32px;border-radius:6px;text-decoration:none;font-weight:700;font-size:16px;display:inline-block;box-shadow:0 4px 12px rgba(37,99,235,0.3);">Hubungi Tim Majujaya via WhatsApp</a>
      </section>
    </main>

    <footer style="border-top:1px solid #e2e8f0;background:#f8fafc;padding:40px 20px;font-size:14px;color:#64748b;">
      <div style="max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:32px;margin-bottom:32px;">
        <div>
          <h4 style="font-size:18px;font-weight:700;color:#0f172a;margin-bottom:12px;">${esc(footerData.company)}</h4>
          <p style="line-height:1.6;margin-bottom:12px;">${esc(footerData.tagline)}. Kontraktor pondasi bore pile &amp; strauss pile profesional sejak 2013.</p>
          <p style="line-height:1.6;font-size:13px;"><strong>Alamat:</strong> ${esc(footerData.address)}</p>
          <p style="line-height:1.6;font-size:13px;"><strong>WhatsApp:</strong> +62 815 1481 1120</p>
          <p style="line-height:1.6;font-size:13px;"><strong>Email:</strong> ${esc(footerData.email)}</p>
        </div>
        <div>
          <h4 style="font-size:16px;font-weight:700;color:#0f172a;margin-bottom:12px;">Navigasi</h4>
          <ul style="list-style:none;padding:0;line-height:2;">
            ${navLinks.map((l) => `<li><a href="${l.href}" style="color:#64748b;text-decoration:none;">${esc(l.label)}</a></li>`).join('')}
          </ul>
        </div>
        <div>
          <h4 style="font-size:16px;font-weight:700;color:#0f172a;margin-bottom:12px;">Blog &amp; Artikel</h4>
          <ul style="list-style:none;padding:0;line-height:2;">
            ${footerData.blogLinks.map((l) => `<li><a href="${l.href}" style="color:#64748b;text-decoration:none;">${esc(l.title)}</a></li>`).join('')}
          </ul>
        </div>
        <div>
          <h4 style="font-size:16px;font-weight:700;color:#0f172a;margin-bottom:12px;">Wilayah Layanan</h4>
          <ul style="list-style:none;padding:0;line-height:2;">
            ${footerData.serviceLinks.map((l) => `<li><a href="${l.href}" style="color:#64748b;text-decoration:none;">${esc(l.title.trim())}</a></li>`).join('')}
          </ul>
        </div>
      </div>
      <div style="max-width:1100px;margin:0 auto;padding-top:20px;border-top:1px solid #e2e8f0;text-align:center;font-size:13px;">
        &copy; 2026 ${esc(footerData.company)}. Seluruh hak cipta dilindungi.<br>${esc(footerData.legacyNote)}
      </div>
    </footer>
  </div>`;
}

function prerenderHomepage() {
  const homepagePath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(homepagePath)) {
    console.error('❌ Homepage not found for prerender at:', homepagePath);
    process.exit(1);
  }

  let html = fs.readFileSync(homepagePath, 'utf8');
  console.log(`🚀 Prerendering homepage HTML (${html.length} bytes)...`);

  const bodyContent = renderHomepageBody();

  // Inject full crawlable content into #root
  const rootOpen = html.indexOf('<div id="root">');
  if (rootOpen === -1) throw new Error('#root not found in dist/index.html');
  const rootClose = html.indexOf('</div>', rootOpen);
  if (rootClose === -1) throw new Error('#root close not found in dist/index.html');

  html = html.slice(0, rootOpen) + '<div id="root">\n' + bodyContent + '\n    </div>' + html.slice(rootClose + '</div>'.length);


  fs.writeFileSync(homepagePath, html, 'utf8');
  console.log(`✅ Homepage prerendered successfully (${html.length} bytes)!`);
}

function generateLocationPages() {
  const homepagePath = path.join(DIST_DIR, 'index.html');
  
  console.log(`📂 Checking dist directory: ${DIST_DIR}`);
  if (!fs.existsSync(homepagePath)) {
    console.error('❌ Homepage not found at:', homepagePath);
    process.exit(1);
  }

  const homepageHtml = fs.readFileSync(homepagePath, 'utf8');
  console.log(`🚀 Generating ${locationPages.length} location pages...`);

  for (const loc of locationPages) {
    try {
      console.log(`  🔧 Processing: /location/${loc.slug}/`);
      
      const dom = new JSDOM(homepageHtml);
      const document = dom.window.document;

      const canonicalUrl = `https://borepilemajujaya.com/location/${loc.slug}/`;
      const title = loc.title || (loc.headline ? `${loc.headline} | Majujaya` : `Jasa Bore Pile ${loc.city} — Survey Gratis | Majujaya`);
      const description = loc.metaDesc || `Jasa bore pile & strauss pile profesional di ${loc.city} sejak 2013. Survey gratis, harga bersaing, 250+ titik. Melayani seluruh wilayah ${loc.city}.`;

      // Update Title
      const titleEl = document.querySelector('title');
      if (titleEl) titleEl.textContent = title;

      // Update Meta Description
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', description);

      // Update Canonical
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute('href', canonicalUrl);

      // Update OG Tags
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', title);
      
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', description);

      // Update Twitter
      const twUrl = document.querySelector('meta[property="twitter:url"]');
      if (twUrl) twUrl.setAttribute('content', canonicalUrl);
      const twTitle = document.querySelector('meta[property="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', title);
      const twDesc = document.querySelector('meta[property="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', description);

      // Update Hreflang
      const hreflangId = document.querySelector('link[hreflang="id"]');
      if (hreflangId) hreflangId.setAttribute('href', canonicalUrl);
      const hreflangXd = document.querySelector('link[hreflang="x-default"]');
      if (hreflangXd) hreflangXd.setAttribute('href', canonicalUrl);

      // Update Schema BreadcrumbList
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      for (const script of scripts) {
        try {
          const parsed = JSON.parse(script.textContent);
          if (parsed['@type'] === 'FAQPage') {
            // FAQPage must mirror the FAQ visible on this page (not the homepage FAQ).
            if (loc.faq && loc.faq.length) {
              parsed.mainEntity = loc.faq.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: stripTags(f.a) },
              }));
              script.textContent = JSON.stringify(parsed, null, 2);
            } else {
              script.remove();
            }
          }
          if (parsed['@type'] === 'Service') {
            parsed.name = `Jasa Bore Pile & Strauss Pile ${loc.city}`;
            parsed.areaServed = { '@type': 'AdministrativeArea', name: loc.city };
            script.textContent = JSON.stringify(parsed, null, 2);
          }
          if (parsed['@type'] === 'BreadcrumbList') {
            parsed.itemListElement = [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://borepilemajujaya.com/'
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Layanan',
                'item': 'https://borepilemajujaya.com/#layanan'
              },
              {
                '@type': 'ListItem',
                'position': 3,
                'name': `Jasa Bore Pile ${loc.city}`,
                'item': canonicalUrl
              }
            ];
            script.textContent = JSON.stringify(parsed, null, 2);
          }
        } catch (_) {
          // ignore non-json
        }
      }

      // Write location file at /location/{slug}/index.html
      const locDir = path.join(DIST_DIR, 'location', loc.slug);
      fs.mkdirSync(locDir, { recursive: true });
      let html = dom.serialize();
      const bodyContent = renderLocationBody(loc);

      // Inject crawlable copy into #root
      const rootOpen = html.indexOf('<div id="root">');
      if (rootOpen === -1) throw new Error('#root not found');
      const rootClose = html.indexOf('</div>', rootOpen);
      if (rootClose === -1) throw new Error('#root close not found');
      html = html.slice(0, rootOpen) + '<div id="root">\n' + bodyContent + '\n    </div>' + html.slice(rootClose + '</div>'.length);

      fs.writeFileSync(path.join(locDir, 'index.html'), html, 'utf8');
      
      console.log(`    ✅ Generated: /location/${loc.slug}/`);
    } catch (error) {
      console.error(`    ❌ Failed to generate ${loc.slug}:`, error.message);
      throw error;
    }
  }

  console.log('🎉 All location pages generated!');
}

function updateSitemapLastmod() {
  const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.warn('⚠️  sitemap.xml not found in dist — skipping lastmod update');
    return;
  }
  const fallback = readLastmodFallback();
  const useGit = isFullGitClone();
  let xml = fs.readFileSync(sitemapPath, 'utf8');
  xml = xml.replace(/\s*<changefreq>[^<]*<\/changefreq>/g, '');
  xml = xml.replace(/\s*<priority>[^<]*<\/priority>/g, '');
  xml = xml.replace(/<url>([\s\S]*?)<\/url>/g, (block) => {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
    if (!loc) return block;
    let pathname;
    try {
      pathname = new URL(loc).pathname;
    } catch {
      return block;
    }
    const source = sourceFileForPath(pathname);
    const gitDate = useGit && source ? gitLastmodForFile(source) : null;
    const existing = block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1];
    const date = gitDate || fallback[pathname] || existing;
    if (!date) return block;
    if (/<lastmod>/.test(block)) {
      return block.replace(/<lastmod>[^<]+<\/lastmod>/, `<lastmod>${date}</lastmod>`);
    }
    return block.replace('</loc>', `</loc>\n    <lastmod>${date}</lastmod>`);
  });
  fs.writeFileSync(sitemapPath, xml, 'utf8');
  console.log(`🗓️  sitemap.xml lastmod updated (${useGit ? 'git history' : 'lastmod.json fallback'})`);
}

try {
  generateLocationPages();
  prerenderHomepage();
  updateSitemapLastmod();
} catch (e) {
  console.error('🚨 Prerender failed:', e.message);
  console.error(e.stack);
  process.exit(1);
}
