import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';
import { locationPages, getLocationDetail, footer as footerData, navLinks } from '../src/data/content.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, '..', 'dist');

const LOCATIONS = [
  { slug: 'jakarta-pusat', name: 'Jakarta Pusat', keywords: 'jasa bore pile jakarta pusat, kontraktor bore pile menteng, pondasi bore pile senayan, strauss pile jakpus' },
  { slug: 'jakarta-selatan', name: 'Jakarta Selatan', keywords: 'jasa bore pile jakarta selatan, kontraktor pondasi jaksel, bore pile tebet, strauss pile jakarta selatan' },
  { slug: 'jakarta-barat', name: 'Jakarta Barat', keywords: 'jasa bore pile jakarta barat, kontraktor pondasi jakbar, bore pile grogol, strauss pile jakarta barat' },
  { slug: 'jakarta-timur', name: 'Jakarta Timur', keywords: 'jasa bore pile jakarta timur, kontraktor pondasi jaktim, bore pile matraman, strauss pile jakarta timur' },
  { slug: 'jakarta-utara', name: 'Jakarta Utara', keywords: 'jasa bore pile jakarta utara, kontraktor pondasi jakut, bore pile kelapa gading, strauss pile jakarta utara' },
  { slug: 'bogor', name: 'Bogor', keywords: 'jasa bore pile bogor, kontraktor pondasi bogor, bore pile bogor selatan, strauss pile bogor' },
  { slug: 'depok', name: 'Depok', keywords: 'jasa bore pile depok, kontraktor pondasi depok, bore pile pancoran mas, strauss pile depok' },
  { slug: 'tangerang', name: 'Tangerang', keywords: 'jasa bore pile tangerang, kontraktor pondasi tangerang, bore pile BSD, strauss pile tangerang' },
  { slug: 'bekasi', name: 'Bekasi', keywords: 'jasa bore pile bekasi, kontraktor pondasi bekasi, bore pile cikarang, strauss pile bekasi' },
  { slug: 'karawang', name: 'Karawang', keywords: 'jasa bore pile karawang, kontraktor pondasi karawang, bore pile cikampek, strauss pile karawang' },
  { slug: 'subang', name: 'Subang', keywords: 'jasa bore pile subang, kontraktor pondasi subang, bore pile subang, strauss pile subang' },
  { slug: 'cianjur', name: 'Cianjur', keywords: 'jasa bore pile cianjur, kontraktor pondasi cianjur, bore pile cianjur, strauss pile cianjur' },
  { slug: 'cikarang', name: 'Cikarang', keywords: 'jasa bore pile cikarang, kontraktor pondasi cikarang, bore pile cikarang, strauss pile cikarang' },
  { slug: 'purwakarta', name: 'Purwakarta', keywords: 'jasa bore pile purwakarta, kontraktor pondasi purwakarta, bore pile purwakarta, strauss pile purwakarta' },
  { slug: 'serang', name: 'Serang', keywords: 'jasa bore pile serang, kontraktor pondasi serang, bore pile serang, strauss pile serang' },
  { slug: 'cilegon', name: 'Cilegon', keywords: 'jasa bore pile cilegon, kontraktor pondasi cilegon, bore pile cilegon, strauss pile cilegon' },
];

function locMeta(loc) {
  const page = locationPages.find((p) => p.slug === loc.slug);
  return page || { slug: loc.slug, city: loc.name, intro: '', services: [], areaCovered: [], soilInfo: '', faq: [], headline: '' };
}

function esc(s) {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function renderLocationBody(loc) {
  const page = locMeta(loc);
  const city = page.city || loc.name;
  const wa = '6281514811120';
  const waUrl = `https://wa.me/${wa}?text=${encodeURIComponent(`Halo Majujaya, saya mau konsultasi bore pile di ${city}. Tolong info harga & survey lokasi gratis.`)}`;

  const services = (page.services || []).map(
    (s) => `<li style="background:#f5f7fa;border:1px solid #e5e7eb;border-radius:8px;padding:10px 14px;">${esc(s)}</li>`
  ).join('');

  const area = (page.areaCovered || []).map(
    (a) => `<span style="display:inline-block;background:#eef2ff;border:1px solid #c7d2fe;color:#3730a3;border-radius:999px;padding:6px 14px;font-size:14px;margin:4px;">${esc(a)}</span>`
  ).join('');

  const soil = page.soilInfo
    ? `<section style="margin-top:32px;"><h2 style="font-size:22px;margin-bottom:10px;">Karakteristik Tanah & Informasi Bore Pile ${esc(city)}</h2><p style="line-height:1.7;">${esc(page.soilInfo)}</p></section>`
    : '';

  const faqs = (page.faq || []).map(
    (f) => `<details style="border:1px solid #e5e7eb;border-radius:8px;padding:14px 18px;margin-bottom:10px;"><summary style="font-weight:600;cursor:pointer;">${esc(f.q)}</summary><p style="line-height:1.7;margin-top:10px;color:#374151;">${esc(f.a)}</p></details>`
  ).join('');

  const h1 = page.headline || `Jasa Bore Pile & Strauss Pile di ${city} | Majujaya`;

  const detail = getLocationDetail(page);
  const paras = detail.paragraph.split('\n\n').map((p) => `<p style="line-height:1.7;font-size:17px;margin-bottom:14px;">${esc(p)}</p>`).join('');

  const related = detail.others.map(
    (l) => `<a href="${l.href}" style="display:inline-block;background:#f5f7fa;border:1px solid #e5e7eb;border-radius:999px;padding:6px 14px;font-size:14px;margin:4px;color:#0f172a;text-decoration:none;">${esc(l.title)}</a>`
  ).join('');

  const footLinks = [
    ...navLinks.map((l) => `<a href="${l.href}">${esc(l.label)}</a>`),
    ...footerData.blogLinks.map((l) => `<a href="${l.href}">${esc(l.title)}</a>`),
    ...footerData.serviceLinks.map((l) => `<a href="${l.href}">${esc(l.title.trim())}</a>`),
  ].join(' · ');

  return `<div style="padding:40px 20px;font-family:sans-serif;max-width:960px;margin:0 auto;">
    <h1 style="font-size:32px;margin-bottom:16px;">${esc(h1)}</h1>
    <p style="line-height:1.7;font-size:17px;">${esc(page.intro)}</p>
    ${paras}
    <section style="margin-top:32px;"><h2 style="font-size:22px;margin-bottom:12px;">Layanan Bore Pile Lainnya</h2><div>${related}</div></section>
    <section style="margin-top:32px;"><h2 style="font-size:22px;margin-bottom:12px;">Layanan Bore Pile & Strauss Pile di ${esc(city)}</h2><ul style="list-style:none;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;">${services}</ul></section>
    <section style="margin-top:32px;"><h2 style="font-size:22px;margin-bottom:12px;">Area Layanan ${esc(city)}</h2><div>${area}</div></section>
    ${soil}
    <section style="margin-top:32px;"><h2 style="font-size:22px;margin-bottom:12px;">FAQ ${esc(city)}</h2>${faqs || '<p>Tidak ada FAQ.</p>'}</section>
    <section style="margin-top:32px;background:#1e3a8a;color:#fff;border-radius:12px;padding:28px;text-align:center;"><h2 style="font-size:24px;margin:0 0 10px;">Butuh Jasa Bore Pile di ${esc(city)}?</h2><p style="margin:0 0 18px;">Survey lokasi GRATIS & RAB detail tanpa biaya. Hubungi tim Majujaya sekarang.</p><a href="${waUrl}" style="background:#25d366;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:700;display:inline-block;">Chat via WhatsApp 0815-1481-1120</a></section>
    <footer style="margin-top:32px;border-top:1px solid #e5e7eb;padding-top:16px;font-size:13px;color:#6b7280;">${footLinks}</footer>
  </div>`;
}

function generateLocationPages() {
  const homepagePath = path.join(DIST_DIR, 'index.html');
  
  console.log(`📂 Checking dist directory: ${DIST_DIR}`);
  if (!fs.existsSync(homepagePath)) {
    console.error('❌ Homepage not found at:', homepagePath);
    console.error('Available files:', fs.readdirSync(DIST_DIR || '.').slice(0, 10));
    process.exit(1);
  }

  const homepageHtml = fs.readFileSync(homepagePath, 'utf8');
  console.log(`✓ Homepage loaded (${homepageHtml.length} bytes)`);

  console.log(`🚀 Generating ${LOCATIONS.length} location pages...`);

  for (const loc of LOCATIONS) {
    try {
      console.log(`  🔧 Processing: /${loc.slug}/`);
      
      const dom = new JSDOM(homepageHtml);
      const document = dom.window.document;

      const canonicalUrl = `https://borepilemajujaya.com/location/${loc.slug}/`;
      const title = `Jasa Bore Pile & Strauss Pile di ${loc.name} | Majujaya`;
      const description = `Jasa bore pile & strauss pile profesional di ${loc.name} sejak 2013. Survey gratis, harga bersaing, 250+ proyek. Melayani perumahan, gedung, infrastruktur di ${loc.name}.`;

      // Update Title
      const titleEl = document.querySelector('title');
      if (titleEl) titleEl.textContent = title;

      // Update Meta Description
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', description);

      // Update Keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) metaKeywords.setAttribute('content', loc.keywords);

      // Update geo.placename
      const geoPlacename = document.querySelector('meta[name="geo.placename"]');
      if (geoPlacename) geoPlacename.setAttribute('content', loc.name);

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
      const twTitle = document.querySelector('meta[property="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', title);
      const twDesc = document.querySelector('meta[property="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', description);

      // Update Hreflang
      const hreflangId = document.querySelector('link[hreflang="id"]');
      if (hreflangId) hreflangId.setAttribute('href', canonicalUrl);
      const hreflangXd = document.querySelector('link[hreflang="x-default"]');
      if (hreflangXd) hreflangXd.setAttribute('href', canonicalUrl);

      // Write location file at /location/{slug}/index.html
      const locDir = path.join(DIST_DIR, 'location', loc.slug);
      fs.mkdirSync(locDir, { recursive: true });
      let html = dom.serialize();
      // Replace the LAST <noscript>...</noscript> block (body SEO fallback) with full location content.
      // JSDOM escapes noscript innerHTML as text, so do raw string surgery instead.
      // NOTE: no global &amp; unescape here — it corrupted legitimate entities elsewhere in the document.
      const bodyContent = renderLocationBody(loc);
      const lastOpen = html.lastIndexOf('<noscript>');
      const lastClose = html.lastIndexOf('</noscript>');
      if (lastOpen !== -1 && lastClose > lastOpen) {
        html = html.slice(0, lastOpen) + '<noscript>\n' + bodyContent + '\n  </noscript>' + html.slice(lastClose + '</noscript>'.length);
      } else {
        throw new Error('noscript fallback block not found');
      }
      fs.writeFileSync(path.join(locDir, 'index.html'), html);
      
      console.log(`    ✅ Generated: ${loc.slug}/`);
    } catch (error) {
      console.error(`    ❌ Failed to generate ${loc.slug}:`, error.message);
      throw error;
    }
  }

  console.log('🎉 All location pages generated!');
}

function refreshSitemapLastmod() {
  const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.warn('⚠️  sitemap.xml not found in dist — skipping lastmod refresh');
    return;
  }
  const today = new Date().toISOString().slice(0, 10);
  let xml = fs.readFileSync(sitemapPath, 'utf8');
  const before = xml.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1];
  xml = xml.replace(/<lastmod>[^<]+<\/lastmod>/g, `<lastmod>${today}</lastmod>`);
  fs.writeFileSync(sitemapPath, xml);
  console.log(`🗓️  sitemap.xml lastmod refreshed: ${before} -> ${today}`);
}

try {
  generateLocationPages();
  refreshSitemapLastmod();
} catch (e) {
  console.error('🚨 Prerender failed:', e.message);
  console.error(e.stack);
  process.exit(1);
}
