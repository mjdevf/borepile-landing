import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "public", "og-image.jpg");
const outDir = path.join(root, "public", "images", "blog");

const articles = [
  {
    file: "og-borepile-panduan.jpg",
    title: "Apa Itu Borepile?\nPanduan Lengkap 2026",
  },
  {
    file: "og-harga-bore-pile.jpg",
    title: "Harga Bore Pile Per Titik\nTerbaru 2026",
  },
  {
    file: "og-tips-kontraktor-bore-pile.jpg",
    title: "7 Tips Memilih Kontraktor\nBore Pile Terpercaya",
  },
  {
    file: "og-perbedaan-strauss-bore.jpg",
    title: "Perbedaan Strauss Pile\ndan Bore Pile",
  },
  {
    file: "og-borepile-rumah-2-lantai.jpg",
    title: "Bore Pile untuk\nRumah 2 Lantai",
  },
];

const W = 1200, H = 630, BAR = 250;

for (const a of articles) {
  const bg = sharp(src).resize(W, H, { fit: "cover" });
  const lines = a.title.split("\n");
  const tspans = lines
    .map((t, i) => `<tspan x="46" y="${118 + i * 56}">${t}</tspan>`)
    .join("");
  const svg = Buffer.from(
    `<svg width="${W}" height="${BAR}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${W}" height="${BAR}" fill="rgba(14,18,32,0.78)"/>
      <rect x="0" y="0" width="${W}" height="4" fill="#e8b93a"/>
      <text x="46" y="58" font-family="DejaVu Sans" font-weight="bold" font-size="34" letter-spacing="3" fill="#ffffff">MAJUJAYA BORE PILE</text>
      <text x="46" y="118" font-family="DejaVu Sans" font-weight="bold" font-size="44" fill="#ffffff">${tspans}</text>
    </svg>`
  );
  await bg
    .composite([{ input: svg, top: H - BAR, left: 0 }])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(outDir, a.file));
  console.log("wrote", a.file);
}
console.log("done");