import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { transform } from 'esbuild';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, '..', 'dist', 'blog', 'blog.css');

if (!fs.existsSync(target)) {
  console.warn('⚠️  dist/blog/blog.css not found — skipping minify');
  process.exit(0);
}

const source = fs.readFileSync(target, 'utf8');
const { code } = await transform(source, {
  loader: 'css',
  minify: true,
  legalComments: 'none',
});

fs.writeFileSync(target, code);
console.log(`🗜️  blog.css minified: ${source.length} -> ${code.length} bytes`);
