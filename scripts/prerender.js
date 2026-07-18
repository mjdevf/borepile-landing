import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';

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

async function generateLocationPages() {
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

    const canonicalUrl = `https://borepilemajujaya.com/${loc.slug}/`;
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

    // Update Hreflang
    const hreflangId = document.querySelector('link[hreflang="id"]');
    if (hreflangId) hreflangId.setAttribute('href', canonicalUrl);

    // Update Schema LD - LocalBusiness URL
    const scriptLd = document.querySelector('script[type="application/ld+json"]');
    if (scriptLd) {
      try {
        const jsonData = JSON.parse(scriptLd.textContent);
        if (jsonData['@type'] === 'LocalBusiness') {
          jsonData.url = canonicalUrl;
          jsonData.address = {
            "@type": "PostalAddress",
            "addressRegion": loc.name,
            "addressCountry": "ID"
          };
          jsonData.servesArea = loc.name;
          scriptLd.textContent = JSON.stringify(jsonData, null, 2);
        }
      } catch (e) {
        console.warn(`    ⚠️ Schema parse error for ${loc.slug}:`, e.message);
      }
    }

    // Add Breadcrumb Schema for location page
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://borepilemajujaya.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Layanan Lokasi",
          "item": "https://borepilemajujaya.com/location"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": loc.name,
          "item": canonicalUrl
        }
      ]
    };
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema, null, 2);
    document.head.appendChild(breadcrumbScript);

    // Write location file
    const locDir = path.join(DIST_DIR, loc.slug);
    fs.mkdirSync(locDir, { recursive: true });
    fs.writeFileSync(path.join(locDir, 'index.html'), dom.serialize());
    
    console.log(`    ✅ Generated: ${loc.slug}/`);
    } catch (error) {
      console.error(`    ❌ Failed to generate ${loc.slug}:`, error.message);
      throw error;
    }
  }

  console.log('🎉 All location pages generated!');
}

generateLocationPages().catch(e => {
  console.error('🚨 Prerender failed:', e.message);
  console.error(e.stack);
  process.exit(1);
});