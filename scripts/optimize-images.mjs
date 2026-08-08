import sharp from 'sharp';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const brandDir = path.resolve(__dirname, '../public/brand');

const WIDTHS = [400, 800, 1200];
const SOURCES = [
  'mercadolar-logo',
  'mercadolar-avatar',
  'mercadolar-mascot',
  'mercadolar-hero-banner',
];

async function optimizeImage(baseName) {
  const inputPath = path.join(brandDir, `${baseName}.png`);
  if (!existsSync(inputPath)) {
    console.warn(`[skip] ${inputPath} não encontrado`);
    return;
  }

  for (const width of WIDTHS) {
    const webpPath = path.join(brandDir, `${baseName}-${width}.webp`);
    await sharp(inputPath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(webpPath);
    console.log(`[ok] ${baseName}-${width}.webp`);
  }
}

for (const source of SOURCES) {
  await optimizeImage(source);
}

console.log('Otimização concluída.');
