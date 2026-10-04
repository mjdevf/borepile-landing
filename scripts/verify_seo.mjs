import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, '..', 'dist');

let failed = false;
function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    failed = true;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

console.log('--- 1. VERIFY ALL SITEMAP URLS APPEAR AS <a href> IN dist/index.html ---');
const sitemapXml = fs.readFileSync(path.join(distDir, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
console.log(`Total URLs in sitemap: ${sitemapUrls.length}`);

const homepageHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
const homepageDom = new JSDOM(homepageHtml);
const homepageLinks = Array.from(homepageDom.window.document.querySelectorAll('a'))
  .map(a => a.getAttribute('href'))
  .filter(Boolean);

for (const url of sitemapUrls) {
  const urlObj = new URL(url);
  const pathname = urlObj.pathname;
  const matched = homepageLinks.some(link => 
    link === url || 
    link === pathname || 
    link === pathname.replace(/\/$/, '') ||
    link.startsWith(pathname)
  );
  assert(matched, `Sitemap URL "${url}" (path: ${pathname}) must appear as <a href> in dist/index.html`);
}

console.log('\n--- 2. VERIFY NO CANONICAL URL WITHOUT SLASH ---');
function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const allHtmlFiles = getAllHtmlFiles(distDir);
console.log(`Found ${allHtmlFiles.length} HTML files in dist/`);

for (const file of allHtmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  const canonical = doc.querySelector('link[rel="canonical"]');
  if (canonical) {
    const href = canonical.getAttribute('href');
    const relFile = path.relative(distDir, file);
    if (href.endsWith('.html')) {
      assert(true, `Canonical in ${relFile} points to file: ${href}`);
    } else {
      assert(href.endsWith('/'), `Canonical in ${relFile} must end with slash: got "${href}"`);
    }
  }
}

console.log('\n--- 3. VERIFY EACH PAGE HAS UNIQUE TITLE AND H1 ---');
const titles = new Map();
const h1s = new Map();

for (const file of allHtmlFiles) {
  const relFile = path.relative(distDir, file);
  if (relFile.includes('404') || relFile.includes('google8bc')) continue;
  
  const html = fs.readFileSync(file, 'utf8');
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  
  const title = doc.querySelector('title')?.textContent?.trim();
  const h1Els = doc.querySelectorAll('h1');
  const h1 = h1Els[0]?.textContent?.trim();
  
  assert(Boolean(title), `File ${relFile} must have a <title> (got: "${title}")`);
  assert(h1Els.length === 1, `File ${relFile} must have exactly one <h1> (got: ${h1Els.length})`);
  
  if (title) {
    if (titles.has(title)) {
      console.warn(`⚠️ Warning: Duplicate title "${title}" in ${relFile} and ${titles.get(title)}`);
    } else {
      titles.set(title, relFile);
    }
  }
  
  if (h1) {
    if (h1s.has(h1)) {
      console.warn(`⚠️ Warning: Duplicate H1 "${h1}" in ${relFile} and ${h1s.get(h1)}`);
    } else {
      h1s.set(h1, relFile);
    }
  }
}

console.log('\n--- 4. VERIFY ALL JSON-LD SCHEMAS ARE VALID JSON ---');
for (const file of allHtmlFiles) {
  const relFile = path.relative(distDir, file);
  const html = fs.readFileSync(file, 'utf8');
  const dom = new JSDOM(html);
  const scripts = dom.window.document.querySelectorAll('script[type="application/ld+json"]');
  
  for (let i = 0; i < scripts.length; i++) {
    const content = scripts[i].textContent;
    try {
      const parsed = JSON.parse(content);
      assert(true, `Valid JSON-LD #${i+1} (${parsed['@type'] || 'Object'}) in ${relFile}`);
      
      if (parsed['@type'] === 'Offer' || parsed.hasOfferCatalog) {
        const checkOffer = (obj) => {
          if (!obj || typeof obj !== 'object') return;
          if (obj['@type'] === 'Offer') {
            assert(!obj.priceRange, `Offer in ${relFile} must NOT have priceRange property`);
          }
          for (const key in obj) {
            if (typeof obj[key] === 'object') checkOffer(obj[key]);
          }
        };
        checkOffer(parsed);
      }
    } catch (err) {
      assert(false, `Invalid JSON-LD in ${relFile}: ${err.message}`);
    }
  }
}

console.log('\n--- 5. VERIFY LOCATION PAGES WORD COUNT >= 300 ---');
const locationDirs = fs.readdirSync(path.join(distDir, 'location'));
for (const loc of locationDirs) {
  const locIndex = path.join(distDir, 'location', loc, 'index.html');
  if (fs.existsSync(locIndex)) {
    const html = fs.readFileSync(locIndex, 'utf8');
    const rootMatch = html.match(/<div id="root">\s*([\s\S]*?)\s*<\/div>/);
    if (rootMatch) {
      const plainText = rootMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      const words = plainText.split(' ').length;
      assert(words >= 300, `Location /location/${loc}/ must have >= 300 words (got: ${words} words)`);
    }
  }
}

console.log('\n--- 6. VERIFY NO LEAKED TAGS, TODOs, OR INCONSISTENT CLAIMS ---');
for (const file of allHtmlFiles) {
  const relFile = path.relative(distDir, file);
  const content = fs.readFileSync(file, 'utf8');
  assert(!content.includes('TODO_MASUKKAN'), `File ${relFile} must not contain TODO_MASUKKAN`);
  assert(!content.toLowerCase().includes('250+ proyek'), `File ${relFile} must not contain "250+ proyek"`);
}

const homepageFaqMatch = homepageHtml.match(/<section id="faq"[\s\S]*?<\/section>/);
if (homepageFaqMatch) {
  assert(!homepageFaqMatch[0].includes('<strong') && !homepageFaqMatch[0].includes('&lt;strong'), 'Homepage FAQ must not contain literal or escaped strong tags');
}
const hpJsonLd = homepageDom.window.document.querySelectorAll('script[type="application/ld+json"]');
for (const s of hpJsonLd) {
  assert(!s.textContent.includes('<strong') && !s.textContent.includes('&lt;strong'), 'JSON-LD scripts must not contain strong tags');
}

console.log('\n--- VERIFICATION SUMMARY ---');
if (failed) {
  console.error('❌ Verification FAILED!');
  process.exit(1);
} else {
  console.log('🎉 ALL VERIFICATION CHECKS PASSED PERFECTLY!');
  process.exit(0);
}
