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
import { SITE, PRICE_DISCLAIMER_TEXT } from '../src/data/siteFacts.js';

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
  if (pathname === '/borepile-terdekat/') return 'src/data/siteFacts.js';
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
    (s) => `<li style="background:#F3F2EE;border:1px solid #E1E0DA;border-radius:8px;padding:12px 16px;"><strong>${esc(s)}</strong><br><span style="font-size:14px;color:#5B5A55;">Layanan pengeboran ${esc(s.toLowerCase())} terpercaya di ${esc(city)} dan sekitarnya.</span></li>`
  ).join('');

  const area = (loc.areaCovered || []).map(
    (a) => `<span style="display:inline-block;background:#F8F8F6;border:1px solid #E1E0DA;color:#8A3420;border-radius:999px;padding:6px 14px;font-size:14px;margin:4px;">${esc(a)}</span>`
  ).join('');

  const faqs = (loc.faq || []).map(
    (f) => `<details style="border:1px solid #E1E0DA;border-radius:8px;padding:14px 18px;margin-bottom:12px;background:#ffffff;"><summary style="font-weight:600;cursor:pointer;color:#17171A;">${esc(f.q)}</summary><p style="line-height:1.7;margin-top:10px;color:#5B5A55;">${esc(stripTags(f.a))}</p></details>`
  ).join('');

  const h1 = loc.headline || `Jasa Bore Pile & Strauss Pile di ${city} | Majujaya`;
  const detail = getLocationDetail(loc);
  const paras = detail.paragraph.split('\n\n').map((p) => `<p style="line-height:1.75;font-size:16px;margin-bottom:14px;color:#5B5A55;">${esc(p)}</p>`).join('');

  const related = detail.others.map(
    (l) => `<a href="${l.href}" style="display:inline-block;background:#F3F2EE;border:1px solid #E1E0DA;border-radius:999px;padding:6px 14px;font-size:14px;margin:4px;color:#17171A;text-decoration:none;">${esc(l.title)}</a>`
  ).join('');

  const allLocations = locationPages
    .filter((l) => l.slug !== loc.slug)
    .map((l) => `<a href="/location/${l.slug}/" style="display:inline-block;margin:4px 8px;color:#A8422A;text-decoration:none;font-size:14px;">Bore Pile ${esc(l.city)}</a>`)
    .join(' · ');

  const footLinks = [
    `<a href="/" style="color:#A8422A;text-decoration:none;">Beranda</a>`,
    ...navLinks.filter((l) => l.href !== '/#hero').map((l) => `<a href="${l.href}" style="color:#5B5A55;text-decoration:none;">${esc(l.label)}</a>`),
    ...footerData.blogLinks.map((l) => `<a href="${l.href}" style="color:#5B5A55;text-decoration:none;">${esc(l.title)}</a>`),
    ...footerData.serviceLinks.map((l) => `<a href="${l.href}" style="color:#5B5A55;text-decoration:none;">${esc(l.title.trim())}</a>`),
  ].join(' · ');

  return `<main id="main-content" style="padding:40px 20px;font-family:system-ui,-apple-system,sans-serif;max-width:960px;margin:0 auto;color:#17171A;">
    <nav aria-label="Breadcrumb" style="margin-bottom:20px;font-size:14px;color:#5B5A55;">
      <a href="/" style="color:#A8422A;text-decoration:none;font-weight:600;">Beranda</a> &rsaquo;
      <span style="color:#5B5A55;">Jasa Bore Pile ${esc(city)}</span>
    </nav>

    <h1 style="font-size:32px;line-height:1.3;margin-bottom:16px;color:#17171A;">${esc(h1)}</h1>
    <p style="line-height:1.75;font-size:17px;color:#17171A;margin-bottom:20px;">${esc(loc.intro)}</p>

    ${paras}

    <section style="margin-top:36px;">
      <h2 style="font-size:22px;margin-bottom:12px;color:#17171A;">Karakteristik Tanah &amp; Informasi Geoteknik di ${esc(city)}</h2>
      <div style="background:#F8F8F6;border:1px solid #E1E0DA;border-radius:8px;padding:20px;line-height:1.75;color:#17171A;">
        <p>${esc(loc.soilInfo)}</p>
      </div>
    </section>

    ${loc.foundationRecommendation ? `
    <section style="margin-top:36px;">
      <h2 style="font-size:22px;margin-bottom:12px;color:#17171A;">Rekomendasi Jenis Pondasi di ${esc(city)}</h2>
      <div style="background:#F8F8F6;border:1px solid #E1E0DA;border-radius:8px;padding:20px;line-height:1.75;color:#17171A;">
        <p>${esc(loc.foundationRecommendation)}</p>
      </div>
    </section>` : ''}

    <section style="margin-top:36px;">
      <h2 style="font-size:22px;margin-bottom:12px;color:#17171A;">Layanan Bore Pile &amp; Strauss Pile di ${esc(city)}</h2>
      <ul style="list-style:none;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;">${services}</ul>
    </section>

    <section style="margin-top:36px;">
      <h2 style="font-size:22px;margin-bottom:12px;color:#17171A;">Cakupan Wilayah Layanan di ${esc(city)}</h2>
      <p style="margin-bottom:12px;color:#5B5A55;">Kami melayani seluruh kelurahan dan kecamatan di area ${esc(city)}, termasuk:</p>
      <div>${area}</div>
    </section>

    <section style="margin-top:36px;">
      <h2 style="font-size:22px;margin-bottom:12px;color:#17171A;">Pertanyaan Umum (FAQ) Bore Pile di ${esc(city)}</h2>
      <div>${faqs}</div>
    </section>

    <section style="margin-top:36px;">
      <h2 style="font-size:22px;margin-bottom:12px;color:#17171A;">Layanan Bore Pile di Wilayah Sekitar:</h2>
      <div>${related}</div>
      <div style="margin-top:16px;padding-top:16px;border-top:1px dashed #E1E0DA;">
        <p style="font-weight:600;margin-bottom:8px;font-size:14px;color:#5B5A55;">Kami juga melayani wilayah lainnya di Jabodetabek &amp; Jawa Barat:</p>
        <div>${allLocations}</div>
      </div>
    </section>

    <section style="margin-top:40px;background:#17171A;color:#ffffff;border-radius:8px;padding:32px;text-align:center;">
      <h2 style="font-size:24px;margin:0 0 12px;color:#ffffff;">Butuh Jasa Bore Pile Terpercaya di ${esc(city)}?</h2>
      <p style="margin:0 0 20px;color:#E1E0DA;line-height:1.6;">Konsultasikan spesifikasi bangunan dan kondisi tanah Anda bersama tim ahli kami. Survey lokasi GRATIS &amp; estimasi RAB detail tanpa biaya.</p>
      <a href="${waUrl}" style="background:#A8422A;color:#ffffff;padding:14px 28px;border-radius:6px;text-decoration:none;font-weight:700;display:inline-block;box-shadow:0 4px 12px rgba(37,99,235,0.3);">Chat via WhatsApp 0815-1481-1120</a>
      <p style="font-size:13px;color:#D2D1CA;margin:14px auto 0;max-width:600px;"><em>*Harga estimasi, bukan harga pasti. Penawaran resmi (RAB) diberikan setelah survey lokasi gratis.</em></p>
    </section>

    <div style="margin-top:32px;">
      <a href="/" style="display:inline-block;padding:10px 20px;background:#F3F2EE;border:1px solid #E1E0DA;border-radius:6px;color:#17171A;text-decoration:none;font-weight:600;">&larr; Kembali ke Beranda Utama Majujaya</a>
    </div>

    <footer style="margin-top:36px;border-top:1px solid #E1E0DA;padding-top:20px;font-size:13px;line-height:1.8;color:#5B5A55;">
      <p style="font-weight:600;margin-bottom:8px;color:#17171A;">Navigasi &amp; Tautan Halaman:</p>
      ${footLinks}
    </footer>
  </main>`;
}

function renderHomepageBody() {
  const wa = '6281514811120';
  const waUrl = `https://api.whatsapp.com/send/?phone=${wa}&text=${encodeURIComponent('Halo Majujaya, saya mau konsultasi jasa bore pile & survey lokasi gratis.')}`;

  const navHtml = navLinks.map(
    (l) => `<a href="${l.href}" style="margin:0 12px;color:#17171A;text-decoration:none;font-weight:500;">${esc(l.label)}</a>`
  ).join('');

  const servicesHtml = servicesData.map(
    (s) => `<div style="background:#ffffff;border:1px solid #E1E0DA;border-radius:8px;padding:20px;">
      <h3 style="font-size:18px;margin-bottom:8px;color:#17171A;">${esc(s.title)}</h3>
      <p style="line-height:1.6;font-size:14px;color:#5B5A55;">${esc(s.desc)}</p>
      <a href="${s.link}" style="color:#A8422A;font-size:14px;font-weight:600;text-decoration:none;">Pelajari Layanan &rarr;</a>
    </div>`
  ).join('');

  const locationLinksHtml = locationPages.map(
    (l) => `<a href="/location/${l.slug}/" style="display:block;background:#F8F8F6;border:1px solid #E1E0DA;border-radius:6px;padding:12px 16px;color:#17171A;text-decoration:none;font-weight:600;transition:border-color 0.2s;">
      Jasa Bore Pile ${esc(l.city)} &rarr;
    </a>`
  ).join('');

  const blogLinksHtml = footerData.blogLinks.map(
    (b) => `<div style="background:#ffffff;border:1px solid #E1E0DA;border-radius:8px;padding:16px;">
      <a href="${b.href}" style="color:#17171A;text-decoration:none;font-weight:600;font-size:15px;line-height:1.4;display:block;">${esc(b.title)}</a>
      <span style="font-size:13px;color:#A8422A;margin-top:6px;display:inline-block;">Baca Artikel &rarr;</span>
    </div>`
  ).join('');

  const faqsHtml = faqData.map(
    (f) => `<details style="border:1px solid #E1E0DA;border-radius:8px;padding:16px 20px;margin-bottom:12px;background:#ffffff;"><summary style="font-weight:600;cursor:pointer;color:#17171A;">${esc(f.q)}</summary><p style="line-height:1.7;margin-top:10px;color:#17171A;">${esc(stripTags(f.a))}</p></details>`
  ).join('');

  const trustHtml = trustBar.items.map(
    (t) => `<div style="text-align:center;padding:12px;"><div style="font-size:28px;font-weight:800;color:#17171A;">${esc(t.value)}${esc(t.suffix)}</div><div style="font-size:14px;color:#5B5A55;">${esc(t.label)}</div></div>`
  ).join('');

  return `<div style="font-family:system-ui,-apple-system,sans-serif;color:#17171A;background:#ffffff;">
    <header style="border-bottom:1px solid #E1E0DA;padding:16px 24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
      <a href="/" style="font-size:20px;font-weight:800;color:#17171A;text-decoration:none;">${esc(footerData.company)}</a>
      <nav style="display:flex;flex-wrap:wrap;gap:8px;">${navHtml}</nav>
    </header>

    <main id="main-content" style="max-width:1100px;margin:0 auto;padding:40px 20px;">
      <section id="hero" style="text-align:center;padding:40px 0 60px;">
        <h1 style="font-size:36px;line-height:1.25;font-weight:800;color:#17171A;margin-bottom:20px;max-width:900px;margin-left:auto;margin-right:auto;">${esc(hero.headline)}</h1>
        <p style="font-size:18px;line-height:1.7;color:#5B5A55;max-width:800px;margin:0 auto 28px;">${esc(hero.subheadline)}</p>
        <div style="display:flex;justify-content:center;gap:16px;flex-wrap:wrap;">
          <a href="${waUrl}" style="background:#A8422A;color:#ffffff;padding:14px 28px;border-radius:6px;text-decoration:none;font-weight:700;box-shadow:0 4px 12px rgba(37,99,235,0.3);">Chat via WhatsApp 0815-1481-1120</a>
          <a href="/#layanan" style="background:#F3F2EE;color:#17171A;padding:14px 28px;border-radius:6px;text-decoration:none;font-weight:600;">Lihat Layanan Kami</a>
        </div>
      </section>

      <section style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;background:#F8F8F6;border:1px solid #E1E0DA;border-radius:12px;padding:24px;margin-bottom:60px;">
        ${trustHtml}
      </section>

      <section id="layanan" style="margin-bottom:60px;">
        <h2 style="font-size:28px;font-weight:700;color:#17171A;margin-bottom:12px;text-align:center;">Layanan Pondasi &amp; Pengeboran Tanah</h2>
        <p style="text-align:center;color:#5B5A55;max-width:650px;margin:0 auto 32px;">Solusi komprehensif mulai dari pengeboran tiang bore pile mesin, strauss pile manual, hingga investigasi tanah di seluruh Indonesia.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;">${servicesHtml}</div>
      <div id="kalkulator"></div>
      <div id="portfolio"></div>
      <div id="maps"></div>
      <div id="wilayah"></div>

      </section>

      <section id="wilayah-layanan" style="margin-bottom:60px;">
        <h2 style="font-size:28px;font-weight:700;color:#17171A;margin-bottom:12px;text-align:center;">Area &amp; Wilayah Layanan Pengeboran</h2>
        <p style="text-align:center;color:#5B5A55;max-width:700px;margin:0 auto 32px;">Kami melayani pekerjaan pondasi bore pile dan strauss pile di 16 wilayah kota dan kabupaten di Jabodetabek, Banten, dan Jawa Barat dengan survey lokasi gratis:</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;">${locationLinksHtml}</div>
      </section>

      <section id="tentang" style="margin-bottom:60px;background:#F8F8F6;border:1px solid #E1E0DA;border-radius:12px;padding:36px;">
        <h2 style="font-size:28px;font-weight:700;color:#17171A;margin-bottom:16px;">${esc(about.title)}</h2>
        <p style="line-height:1.8;color:#17171A;font-size:16px;margin-bottom:16px;">${esc(about.desc)}</p>
        <p style="line-height:1.8;color:#5B5A55;font-size:15px;margin-bottom:24px;"><strong>Visi Perusahaan:</strong> ${esc(about.vision)}</p>
        <p style="line-height:1.8;color:#5B5A55;font-size:14px;margin-bottom:24px;">${esc(about.legacyNote)}</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;">
          ${about.highlights.map((h) => `<div style="background:#ffffff;border:1px solid #E1E0DA;border-radius:8px;padding:16px;"><h3 style="font-size:16px;font-weight:700;color:#17171A;margin-bottom:6px;">${esc(h.title)}</h3><p style="font-size:14px;line-height:1.6;color:#5B5A55;margin:0;">${esc(h.desc)}</p></div>`).join('')}
        </div>
      </section>

      <section id="faq" style="margin-bottom:60px;">
        <h2 style="font-size:28px;font-weight:700;color:#17171A;margin-bottom:12px;text-align:center;">Pertanyaan yang Sering Diajukan (FAQ)</h2>
        <p style="text-align:center;color:#5B5A55;max-width:650px;margin:0 auto 32px;">Jawaban lengkap seputar biaya, estimasi waktu, metode pengerjaan, dan jaminan kualitas jasa bore pile Majujaya.</p>
        <div>${faqsHtml}</div>
      </section>

      <section id="blog" style="margin-bottom:60px;">
        <h2 style="font-size:28px;font-weight:700;color:#17171A;margin-bottom:12px;text-align:center;">Artikel &amp; Panduan Seputar Pondasi</h2>
        <p style="text-align:center;color:#5B5A55;max-width:650px;margin:0 auto 32px;">Panduan teknis, tips memilih kontraktor, dan komparasi metode pondasi tiang untuk proyek Anda.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;">${blogLinksHtml}</div>
      </section>

      <section id="kontak" style="background:#17171A;color:#ffffff;border-radius:12px;padding:40px;text-align:center;margin-bottom:40px;">
        <h2 style="font-size:28px;margin:0 0 12px;color:#ffffff;">Mulai Konsultasi Proyek Anda Sekarang</h2>
        <p style="max-width:650px;margin:0 auto 24px;color:#E1E0DA;line-height:1.6;">Diskusikan kebutuhan tiang bore pile, kedalaman titik, dan rancangan anggaran biaya (RAB) Anda. Survey lokasi dan konsultasi awal 100% GRATIS.</p>
        <a href="${waUrl}" style="background:#A8422A;color:#ffffff;padding:16px 32px;border-radius:6px;text-decoration:none;font-weight:700;font-size:16px;display:inline-block;box-shadow:0 4px 12px rgba(37,99,235,0.3);">Hubungi Tim Majujaya via WhatsApp</a>
      </section>
    </main>

    <footer style="border-top:1px solid #E1E0DA;background:#F8F8F6;padding:40px 20px;font-size:14px;color:#5B5A55;">
      <div style="max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:32px;margin-bottom:32px;">
        <div>
          <h3 style="font-size:18px;font-weight:700;color:#17171A;margin-bottom:12px;">${esc(footerData.company)}</h3>
          <p style="line-height:1.6;margin-bottom:12px;">${esc(footerData.tagline)}. Kontraktor pondasi bore pile &amp; strauss pile profesional sejak 2013.</p>
          <p style="line-height:1.6;font-size:13px;"><strong>Alamat:</strong> ${esc(footerData.address)}</p>
          <p style="line-height:1.6;font-size:13px;"><strong>WhatsApp:</strong> +62 815 1481 1120</p>
          <p style="line-height:1.6;font-size:13px;"><strong>Email:</strong> ${esc(footerData.email)}</p>
        </div>
        <div>
          <h3 style="font-size:16px;font-weight:700;color:#17171A;margin-bottom:12px;">Navigasi</h3>
          <ul style="list-style:none;padding:0;line-height:2;">
            ${navLinks.map((l) => `<li><a href="${l.href}" style="color:#5B5A55;text-decoration:none;">${esc(l.label)}</a></li>`).join('')}
          </ul>
        </div>
        <div>
          <h3 style="font-size:16px;font-weight:700;color:#17171A;margin-bottom:12px;">Blog &amp; Artikel</h3>
          <ul style="list-style:none;padding:0;line-height:2;">
            ${footerData.blogLinks.map((l) => `<li><a href="${l.href}" style="color:#5B5A55;text-decoration:none;">${esc(l.title)}</a></li>`).join('')}
          </ul>
        </div>
        <div>
          <h3 style="font-size:16px;font-weight:700;color:#17171A;margin-bottom:12px;">Wilayah Layanan</h3>
          <ul style="list-style:none;padding:0;line-height:2;">
            ${footerData.serviceLinks.map((l) => `<li><a href="${l.href}" style="color:#5B5A55;text-decoration:none;">${esc(l.title.trim())}</a></li>`).join('')}
          </ul>
        </div>
      </div>
      <div style="max-width:1100px;margin:0 auto;padding-top:20px;border-top:1px solid #E1E0DA;text-align:center;font-size:13px;">
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

function generateBorepileTerdekatPage() {
  const url = 'https://borepilemajujaya.com/borepile-terdekat/';
  const title = 'Jasa Borepile Terdekat di Jabodetabek | Majujaya';
  const description = 'Cari jasa borepile terdekat? Kami berbasis di Sunter, Jakarta Utara, dan melayani 16 wilayah di Jabodetabek, Banten, dan Jawa Barat. Survey lokasi gratis.';
  const waUrl = 'https://api.whatsapp.com/send/?phone=6281514811120&text=Halo%20Majujaya%2C%20saya%20cari%20jasa%20borepile%20terdekat%20dan%20mau%20survey%20lokasi%20gratis.%20Lokasi%20proyek%20saya%3A%20';

  const cityBySlug = new Map(locationPages.map((loc) => [loc.slug, loc.city]));
  const regionGroups = [
    { label: 'Jakarta', slugs: ['jakarta-pusat', 'jakarta-selatan', 'jakarta-barat', 'jakarta-timur', 'jakarta-utara'] },
    { label: 'Sekitar Jakarta', slugs: ['bogor', 'depok', 'tangerang', 'bekasi'] },
    { label: 'Karawang dan sekitarnya', slugs: ['karawang', 'cikarang', 'purwakarta', 'subang', 'cianjur'] },
    { label: 'Banten', slugs: ['serang', 'cilegon'] },
  ];

  const regionHtml = regionGroups.map((group) => {
    const links = group.slugs.map((slug) => {
      const city = cityBySlug.get(slug) || slug;
      return `<a href="/location/${slug}/">${esc(city)}</a>`;
    }).join(', ');
    return `<p><strong>${esc(group.label)}:</strong> ${links}</p>`;
  }).join('\n');

  const faqs = [
    {
      q: 'Apakah survey lokasi ada biayanya?',
      a: 'Tidak. Survey lokasi dan konsultasi awal gratis.',
    },
    {
      q: 'Apakah kantor Majujaya harus dekat dengan proyek saya?',
      a: 'Tidak harus. Kami berbasis di Sunter, Jakarta Utara, dan melayani langsung 16 wilayah yang tercantum di atas. Untuk lokasi lain, kirim pesan dulu supaya kita bisa membahas jarak dan biaya mobilisasi alatnya.',
    },
    {
      q: 'Berapa lama sampai tim mulai bekerja?',
      a: 'Mobilisasi dimulai dalam 1x24 jam setelah survey selesai dan penawaran disepakati. Jadwal surveynya kami tentukan bersama Anda saat Anda menghubungi kami.',
    },
    {
      q: 'Metode mana yang cocok untuk rumah dua lantai?',
      a: 'Itu bergantung pada kondisi tanah, beban bangunan, dan akses ke lokasi. Ukuran pondasi akhir ditentukan perencana struktur Anda dari data tanah, dan kami mengerjakan bagian pelaksanaannya. Pembahasan lebih jauh ada di artikel <a href="/blog/bore-pile-untuk-rumah-2-lantai.html">bore pile untuk rumah 2 lantai</a>.',
    },
    {
      q: 'Apa yang perlu saya kirim saat menghubungi?',
      a: 'Lokasi proyek, jenis bangunan, jumlah lantai, perkiraan jumlah titik, dan foto lahan serta jalan masuk. Kalau sudah ada denah atau hasil sondir, lampirkan juga. Daftar lengkapnya ada di artikel <a href="/blog/persiapan-sebelum-survey-bore-pile.html">persiapan sebelum survey bore pile</a>.',
    },
  ];

  const regionAreaServed = locationPages.map((loc) => ({
    '@type': 'AdministrativeArea',
    name: loc.city,
  }));

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: 'Jasa Borepile Terdekat di Jabodetabek',
    serviceType: 'Jasa bore pile dan strauss pile',
    description,
    url,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://borepilemajujaya.com/#localbusiness',
      name: SITE.brand,
      telephone: '+62-815-1481-1120',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jl. Sunter Muara No.7, RT.7/RW.5, Sunter Agung, Kec. Tanjung Priok',
        addressLocality: 'Jakarta Utara',
        addressRegion: 'DKI Jakarta',
        postalCode: '14350',
        addressCountry: 'ID',
      },
    },
    areaServed: regionAreaServed,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://borepilemajujaya.com/' },
      { '@type': 'ListItem', position: 2, name: 'Borepile Terdekat', item: url },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: stripTags(faq.a) },
    })),
  };

  const html = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10996838445"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "AW-10996838445");
    </script>
    <script>
      function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof(url) != "undefined") {
            window.location = url;
          }
        };
        gtag("event", "conversion", {
          "send_to": "AW-10996838445/YgskCKDp384cEK3g2fso",
          "event_callback": callback
        });
        return false;
      }
    </script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    <meta name="author" content="${esc(SITE.name)}">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
    <meta name="theme-color" content="#17171A">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="icon" type="image/png" sizes="48x48" href="/favicon.ico">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="manifest" href="/manifest.webmanifest">
    <link rel="canonical" href="${url}">
    <link rel="alternate" hreflang="id" href="${url}">
    <link rel="alternate" hreflang="x-default" href="${url}">
    <meta property="og:locale" content="id_ID">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${esc(SITE.brand)}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(description)}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${SITE.ogImage}">
    <meta name="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="${url}">
    <meta property="twitter:title" content="${esc(title)}">
    <meta property="twitter:description" content="${esc(description)}">
    <meta property="twitter:image" content="${SITE.ogImage}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/blog/blog.css?v=3">
    <style>
      .borepile-region{margin-bottom:1rem}
      .borepile-region a{color:var(--color-accent);text-decoration:none;font-weight:500}
      .borepile-region a:hover{text-decoration:underline}
      .borepile-faq h3{margin-top:1.75rem}
      .borepile-faq h3:first-of-type{margin-top:0}
      .borepile-cta{margin-top:3rem}
      .borepile-cta p{color:#E1E0DA}
    </style>
    <script type="application/ld+json">
${JSON.stringify(serviceSchema, null, 2)}
    </script>
    <script type="application/ld+json">
${JSON.stringify(breadcrumbSchema, null, 2)}
    </script>
    <script type="application/ld+json">
${JSON.stringify(faqSchema, null, 2)}
    </script>
</head>
<body>
    <header class="blog-nav">
        <div class="blog-nav-container">
            <a href="https://borepilemajujaya.com/" class="blog-nav-brand">
                <span class="blog-nav-brand-title">Majujaya Bore Pile</span>
                <span class="blog-nav-brand-badge">Layanan</span>
            </a>
            <nav class="blog-nav-links">
                <a href="https://borepilemajujaya.com/">Beranda</a>
                <a href="https://borepilemajujaya.com/#layanan">Layanan</a>
                <a href="https://borepilemajujaya.com/#kalkulator">Kalkulator</a>
                <a href="https://borepilemajujaya.com/blog/">Blog</a>
            </nav>
            <a href="https://api.whatsapp.com/send/?phone=6281514811120&text=Halo%20Majujaya%2C%20saya%20butuh%20konsultasi%20borepile" class="blog-nav-cta" target="_blank" rel="noopener">
                Hubungi WA
            </a>
        </div>
    </header>

    <main class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
            <a href="https://borepilemajujaya.com/">Beranda</a>
            <span class="breadcrumbs-sep">/</span>
            <span class="breadcrumbs-current">Borepile Terdekat</span>
        </nav>

        <article>
            <h1>Jasa borepile terdekat dari lokasi proyek Anda</h1>

            <p class="article-lead">Majujaya Bore Pile berbasis di Sunter, Jakarta Utara, dan mengerjakan pondasi bore pile serta strauss pile di 16 wilayah di Jabodetabek, Banten, dan Jawa Barat. Kami berdiri sejak 2013 dan sudah menyelesaikan 250+ titik pengeboran.</p>

            <p>Jarak ke lokasi proyek memengaruhi dua hal: ongkos membawa alat bor dan seberapa cepat tim bisa mulai bekerja. Itu sebabnya orang mencari kontraktor yang dekat. Halaman ini menjelaskan wilayah yang kami layani, apa yang terjadi setelah Anda menghubungi kami, dan pertanyaan yang sebaiknya Anda ajukan ke kontraktor mana pun sebelum menyetujui penawaran.</p>

            <section>
                <h2>Wilayah yang kami layani</h2>
                <p>Pilih wilayah proyek Anda untuk melihat halaman khususnya.</p>
                <div class="borepile-region">
${regionHtml}
                </div>
                <p>Proyek di luar daftar ini bisa kita bicarakan lewat WhatsApp. Membawa alat ke lokasi yang jauh memengaruhi biaya, jadi hal itu dibahas di awal.</p>
            </section>

            <section>
                <h2>Dari chat sampai mulai bekerja</h2>
                <ol>
                    <li>Anda mengirim pesan WhatsApp berisi lokasi proyek (bagikan lokasi dari Google Maps), jenis bangunan, jumlah lantai, dan perkiraan jumlah titik.</li>
                    <li>Kami menjadwalkan survey lokasi. Survey dan konsultasi awal gratis.</li>
                    <li>Di lokasi, tim mengukur kondisi tanah dan kebutuhan pengeboran.</li>
                    <li>Setelah survey, Anda menerima penawaran resmi (RAB).</li>
                    <li>Setelah penawaran disepakati, tim bisa mulai mobilisasi dalam 1x24 jam.</li>
                    <li>Pengeboran rata-rata memakan 1 sampai 3 hari per titik. Rumah atau ruko standar selesai dalam 3 sampai 7 hari kerja, tergantung jumlah titik dan kondisi tanah.</li>
                </ol>
                <p>Urutan kerja di lapangan lebih rinci ada di artikel <a href="/blog/tahapan-pengerjaan-bore-pile.html">tahapan pengerjaan bore pile</a>.</p>
            </section>

            <section>
                <h2>Metode yang tersedia</h2>
                <p>Bore pile mesin dikerjakan dengan mini crane untuk diameter 30 sampai 100 cm dan kedalaman hingga 30 meter. Strauss pile manual memakai tenaga putar manusia, untuk diameter 30 sampai 40 cm pada kedalaman 6 sampai 15 meter.</p>
                <p>Di permukiman padat, lebar jalan masuk sering menentukan metode mana yang bisa dipakai, jadi kami mengecek akses lokasi saat survey. Perbandingan lengkapnya ada di artikel <a href="/blog/perbedaan-strauss-pile-dan-bore-pile.html">perbedaan strauss pile dan bore pile</a>.</p>
            </section>

            <section>
                <h2>Pertanyaan untuk kontraktor mana pun</h2>
                <p>Sebelum menandatangani penawaran dari kami atau dari siapa pun, tanyakan hal berikut:</p>
                <ul>
                    <li>Apakah penawarannya tertulis dan memisahkan mobilisasi, pengeboran, tulangan, dan pengecoran?</li>
                    <li>Diameter dan kedalaman yang dipakai untuk menghitung harga berasal dari mana, dan apa yang terjadi kalau kedalaman berubah di lapangan?</li>
                    <li>Siapa yang menyediakan besi dan beton?</li>
                    <li>Siapa yang mengurus tanah hasil galian?</li>
                    <li>Bagaimana hasil pengeboran diperiksa terhadap spesifikasi yang disepakati?</li>
                </ul>
                <p>Daftar yang lebih panjang ada di <a href="/blog/tips-memilih-kontraktor-bore-pile-jakarta.html">7 tips memilih kontraktor bore pile Jakarta</a>, dan cara membaca angka di penawaran dijelaskan di <a href="/blog/cara-membaca-penawaran-bore-pile.html">artikel tentang RAB bore pile</a>.</p>
            </section>

            <section>
                <h2>Biaya</h2>
                <p>${esc(PRICE_DISCLAIMER_TEXT)}</p>
                <p>Rincian faktor biaya ada di <a href="/blog/harga-bore-pile-per-titik-2026.html">harga bore pile per titik 2026</a>.</p>
            </section>

            <section class="borepile-faq">
                <h2>Pertanyaan yang sering diajukan</h2>
${faqs.map((faq) => `                <h3>${esc(faq.q)}</h3>\n                <p>${faq.a}</p>`).join('\n')}
            </section>

            <div class="cta-box borepile-cta">
                <p><strong>Kirim lokasi proyek Anda lewat WhatsApp 0815-1481-1120.</strong></p>
                <a class="btn" href="${waUrl}" target="_blank" rel="noopener">Kirim lokasi proyek via WhatsApp</a>
            </div>
        </article>

        <footer>
            <p>&copy; 2026 JASA BORE PILE MAJUJAYA. Seluruh hak cipta dilindungi.</p>
            <p>
                <a href="https://borepilemajujaya.com/">Kembali ke Beranda</a> &middot;
                <a href="https://borepilemajujaya.com/location/jakarta-pusat/">Jakarta Pusat</a> &middot;
                <a href="https://borepilemajujaya.com/location/jakarta-selatan/">Jakarta Selatan</a> &middot;
                <a href="https://borepilemajujaya.com/location/jakarta-barat/">Jakarta Barat</a> &middot;
                <a href="https://borepilemajujaya.com/location/tangerang/">Tangerang</a> &middot;
                <a href="https://borepilemajujaya.com/location/bekasi/">Bekasi</a>
            </p>
        </footer>
    </main>
</body>
</html>
`;

  const outDir = path.join(DIST_DIR, 'borepile-terdekat');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
  console.log('    ✅ Generated: /borepile-terdekat/');
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
  generateBorepileTerdekatPage();
  prerenderHomepage();
  updateSitemapLastmod();
} catch (e) {
  console.error('🚨 Prerender failed:', e.message);
  console.error(e.stack);
  process.exit(1);
}
