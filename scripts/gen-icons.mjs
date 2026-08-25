import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, '..', 'public');
const svg = fs.readFileSync(path.join(PUBLIC, 'favicon.svg'));

const targets = [
  { file: 'favicon.ico', size: 48, background: { r: 15, g: 23, b: 42, alpha: 0 } },
  { file: 'apple-touch-icon.png', size: 180, background: { r: 255, g: 255, b: 255, alpha: 1 } },
  { file: 'icons/icon-192.png', size: 192, background: { r: 255, g: 255, b: 255, alpha: 1 } },
  { file: 'icons/icon-512.png', size: 512, background: { r: 255, g: 255, b: 255, alpha: 1 } },
  // maskable needs ~20% safe-zone padding
  { file: 'icons/icon-maskable-512.png', size: 512, pad: 0.8, background: { r: 15, g: 23, b: 42, alpha: 1 } },
];

for (const t of targets) {
  const out = path.join(PUBLIC, t.file);
  fs.mkdirSync(path.dirname(out), { recursive: true });

  let pipeline = sharp(svg, { density: Math.ceil((t.size / 32) * 72) }).resize(t.size, t.size);
  if (t.pad) {
    const inner = Math.round(t.size * t.pad);
    const innerBuf = await sharp(svg).resize(inner, inner).png().toBuffer();
    pipeline = sharp({
      create: { width: t.size, height: t.size, channels: 4, background: t.background },
    }).composite([{ input: innerBuf, gravity: 'center' }]);
  }
  await pipeline.png().toFile(out);
  console.log(`✓ ${t.file} (${t.size}x${t.size})`);
}
