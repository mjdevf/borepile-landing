import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';
import { PRICE_RANGE_SCHEMA } from '../src/data/pricing.js';
import { faq as contentFaqList } from '../src/data/content.js';

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

console.log('--- 1. VERIFY ALL HTML FILES WITH PRICES CONTAIN "bukan harga pasti" ---');
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
const priceRegex = /Rp ?\d/;

for (const file of allHtmlFiles) {
  const rel = path.relative(distDir, file);
  const content = fs.readFileSync(file, 'utf8');
  if (priceRegex.test(content)) {
    const hasDisclaimer = content.includes('bukan harga pasti');
    assert(hasDisclaimer, `File ${rel} contains price figures (Rp) but lacks "bukan harga pasti" disclaimer`);
  }
}

console.log('\n--- 2. VERIFY dist/index.html JSON-LD priceRange ---');
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
const dom = new JSDOM(indexHtml);
const document = dom.window.document;
const jsonLdScripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));

let localBusinessFound = false;
let faqAnswerText = null;

for (const script of jsonLdScripts) {
  try {
    const data = JSON.parse(script.textContent);
    if (data['@type'] === 'LocalBusiness') {
      localBusinessFound = true;
      assert(
        data.priceRange === PRICE_RANGE_SCHEMA,
        `LocalBusiness priceRange is "${data.priceRange}", expected "${PRICE_RANGE_SCHEMA}"`
      );
    }
    if (data['@type'] === 'FAQPage' && Array.isArray(data.mainEntity)) {
      const priceQuestion = data.mainEntity.find(
        (q) => q.name && (q.name.toLowerCase().includes('biaya') || q.name.toLowerCase().includes('harga'))
      );
      if (priceQuestion && priceQuestion.acceptedAnswer) {
        faqAnswerText = priceQuestion.acceptedAnswer.text;
      }
    }
  } catch (err) {
    console.error('Error parsing JSON-LD in dist/index.html:', err);
  }
}
assert(localBusinessFound, 'LocalBusiness schema found in dist/index.html');

console.log('\n--- 3. VERIFY FAQ PRICE ANSWER MATCHES content.js ---');
const priceFaqInContent = contentFaqList.find(
  (f) => f.q && (f.q.toLowerCase().includes('biaya') || f.q.toLowerCase().includes('harga'))
);
assert(priceFaqInContent, 'Found price FAQ in src/data/content.js');
assert(faqAnswerText, 'Found price FAQ acceptedAnswer in dist/index.html JSON-LD');

if (priceFaqInContent && faqAnswerText) {
  const normalize = (t) => t.replace(/\s+/g, ' ').trim();
  assert(
    normalize(priceFaqInContent.a) === normalize(faqAnswerText),
    `FAQ price answer in content.js must match JSON-LD schema in dist/index.html\ncontent.js: "${priceFaqInContent.a}"\nJSON-LD: "${faqAnswerText}"`
  );
}

console.log('\n--- 4. VERIFY llms.txt DOES NOT CONTAIN OUTDATED PRICES ---');
const llmsPaths = [path.join(distDir, 'llms.txt'), path.join(__dirname, '..', 'public', 'llms.txt')];
for (const lp of llmsPaths) {
  if (fs.existsSync(lp)) {
    const llmsContent = fs.readFileSync(lp, 'utf8');
    const rel = path.relative(path.join(__dirname, '..'), lp);
    assert(!/Rp ?750/i.test(llmsContent), `${rel} must not contain outdated "Rp750"`);
    assert(!/Rp ?2\.000\.000/i.test(llmsContent), `${rel} must not contain outdated "Rp2.000.000"`);
  }
}

console.log('\n--- 5. VERIFY NO UNPROVEN SUPERLATIVES IN dist/ ---');
function checkForbiddenStrings(dir) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      checkForbiddenStrings(fullPath);
    } else if (file.endsWith('.html') || file.endsWith('.txt') || file.endsWith('.json')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const rel = path.relative(distDir, fullPath);
      assert(!/di bawah rata-rata pasar/i.test(content), `File ${rel} must not contain "di bawah rata-rata pasar"`);
      assert(!/termurah/i.test(content), `File ${rel} must not contain "termurah"`);
    }
  }
}
checkForbiddenStrings(distDir);

console.log('\n--- PRICING VERIFICATION SUMMARY ---');
if (failed) {
  console.error('❌ PRICING VERIFICATION FAILED!');
  process.exit(1);
} else {
  console.log('🎉 ALL PRICING CHECKS PASSED PERFECTLY!');
  process.exit(0);
}
