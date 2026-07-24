import { chromium } from 'playwright';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');
const DIST = resolve(__dirname, '../dist');
const PORT = 4199;

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

// Simple static file server
const server = createServer((req, res) => {
  let filePath = join(DIST, req.url === '/' ? 'index.html' : req.url);
  try {
    const content = readFileSync(filePath);
    const ext = filePath.split('.').pop();
    const mime = {
      html: 'text/html', css: 'text/css', js: 'application/javascript',
      json: 'application/json', png: 'image/png', jpg: 'image/jpeg',
      jpeg: 'image/jpeg', webp: 'image/webp', svg: 'image/svg+xml',
      xml: 'application/xml', ico: 'image/x-icon'
    };
    res.writeHead(200, { 'Content-Type': mime[ext] || 'text/plain' });
    res.end(content);
  } catch {
    res.writeHead(404);
    res.end();
  }
});

async function generatePages() {
  console.log('Starting Playwright prerender...');
  
  // Check dist exists
  if (!existsSync(join(DIST, 'index.html'))) {
    console.error('❌ dist/index.html not found — run build first');
    process.exit(1);
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    deviceScaleFactor: 1,
    userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  });

  server.listen(PORT);

  try {
    // 1. Render homepage
    console.log('\n📄 Rendering homepage...');
    const homePage = await context.newPage();
    await homePage.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle', timeout: 30000 });
    await homePage.waitForTimeout(1000);
    // Wait for React to hydrate
    await homePage.waitForSelector('#root > *', { timeout: 10000 }).catch(() => {});
    await homePage.waitForTimeout(500);

    const homeHtml = await homePage.content();
    writeFileSync(join(DIST, 'index.html'), homeHtml);
    const homeKb = Buffer.byteLength(homeHtml) / 1024;
    console.log(`✅ Homepage rendered (${homeKb.toFixed(1)} KB)`);
    
    // Verify content rendered
    const hasContent = homeHtml.includes('Borepile') || homeHtml.includes('hero');
    const rootEmpty = homeHtml.includes('<div id="root"></div>');
    console.log(`   Content: ${hasContent ? '✅' : '❌'} | Root empty: ${rootEmpty ? '❌ YES - PROBLEM' : '✅ NO - good'}\n`);

    // 2. Generate location pages from rendered HTML
    console.log(`🚀 Generating ${LOCATIONS.length} location pages...`);
    
    for (const loc of LOCATIONS) {
      const canonicalUrl = `https://borepilemajujaya.com/location/${loc.slug}/`;
      const title = `Jasa Bore Pile & Strauss Pile di ${loc.name} | Majujaya`;
      const description = `Jasa bore pile & strauss pile profesional di ${loc.name} sejak 2013. Survey gratis, harga bersaing, 250+ proyek. Melayani perumahan, gedung, infrastruktur di ${loc.name}.`;

      // Replace title
      let html = homeHtml.replace(
        /<title>.*?<\/title>/,
        `<title>${title}</title>`
      );
      
      // Replace meta description
      html = html.replace(
        /<meta name="description" content="[^"]*"/,
        `<meta name="description" content="${description}"`
      );
      
      // Replace keywords
      html = html.replace(
        /<meta name="keywords" content="[^"]*"/,
        `<meta name="keywords" content="${loc.keywords}"`
      );

      // Replace geo.placename
      html = html.replace(
        /<meta name="geo\.placename" content="[^"]*"/,
        `<meta name="geo.placename" content="${loc.name}"`
      );

      // Replace canonical
      html = html.replace(
        /<link rel="canonical" href="[^"]*"/,
        `<link rel="canonical" href="${canonicalUrl}"`
      );

      // Replace OG url
      html = html.replace(
        /<meta property="og:url" content="[^"]*"/,
        `<meta property="og:url" content="${canonicalUrl}"`
      );

      // Replace OG title
      html = html.replace(
        /<meta property="og:title" content="[^"]*"/,
        `<meta property="og:title" content="${title}"`
      );

      // Replace OG description
      html = html.replace(
        /<meta property="og:description" content="[^"]*"/,
        `<meta property="og:description" content="${description}"`
      );

      // Replace hreflang
      html = html.replace(
        /<link rel="alternate" hreflang="id" href="[^"]*"/,
        `<link rel="alternate" hreflang="id" href="${canonicalUrl}"`
      );
      html = html.replace(
        /<link rel="alternate" hreflang="x-default" href="[^"]*"/,
        `<link rel="alternate" hreflang="x-default" href="${canonicalUrl}"`
      );

      // Replace Twitter title
      html = html.replace(
        /<meta property="twitter:title" content="[^"]*"/,
        `<meta property="twitter:title" content="${title}"`
      );

      // Replace Twitter description
      html = html.replace(
        /<meta property="twitter:description" content="[^"]*"/,
        `<meta property="twitter:description" content="${description}"`
      );

      // Update LocalBusiness @id and url
      const locDir = join(DIST, 'location', loc.slug);
      mkdirSync(locDir, { recursive: true });
      writeFileSync(join(locDir, 'index.html'), html);
      console.log(`✅ ${loc.slug}/`);
    }

    console.log('\n🎉 All pages prerendered successfully!');
  } catch (err) {
    console.error('❌ Prerender failed:', err.message);
    throw err;
  } finally {
    await browser.close();
    server.close();
  }
}

generatePages().catch(e => {
  console.error(e);
  process.exit(1);
});
