const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:4173';
const DIST_DIR = path.join(__dirname, '..', 'dist');

const LOCATION_PAGES = [
  'jasa-bore-pile-jakarta-pusat', 'jasa-bore-pile-jakarta-selatan',
  'jasa-bore-pile-jakarta-barat', 'jasa-bore-pile-jakarta-timur',
  'jasa-bore-pile-jakarta-utara', 'jasa-bore-pile-bogor',
  'jasa-bore-pile-depok', 'jasa-bore-pile-tangerang',
  'jasa-bore-pile-bekasi', 'jasa-bore-pile-karawang',
];

async function prerender(url, outputPath) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  try {
    await page.goto(url, { waitUntil: 'networkidle' });
    const html = await page.content();
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(outputPath, html);
    console.log(`  ✓ ${path.relative(DIST_DIR, outputPath)}`);
  } catch (e) {
    console.error(`  ✗ ${url}: ${e.message}`);
  } finally {
    await browser.close();
  }
}

(async () => {
  // Copy blog CSS to dist/blog
  const blogDir = path.join(DIST_DIR, 'blog');
  if (!fs.existsSync(blogDir)) fs.mkdirSync(blogDir, { recursive: true });
  const srcBlogCss = path.join(__dirname, '..', 'public', 'blog', 'blog.css');
  if (fs.existsSync(srcBlogCss)) {
    fs.copyFileSync(srcBlogCss, path.join(blogDir, 'blog.css'));
    console.log('  ✓ blog/blog.css');
  }

  // Prerender location pages
  console.log('Prerendering location pages...');
  for (const slug of LOCATION_PAGES) {
    await prerender(`${BASE_URL}/location/${slug}`, path.join(DIST_DIR, 'location', slug, 'index.html'));
  }

  // Copy banner images
  const srcImages = path.join(__dirname, '..', 'public', 'images');
  const dstImages = path.join(DIST_DIR, 'images');
  if (fs.existsSync(srcImages)) {
    if (!fs.existsSync(dstImages)) fs.mkdirSync(dstImages, { recursive: true });
    for (const f of fs.readdirSync(srcImages)) {
      fs.copyFileSync(path.join(srcImages, f), path.join(dstImages, f));
    }
    console.log('  ✓ images/*');
  }

  console.log('Prerender complete!');
})();
