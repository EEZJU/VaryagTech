import sharp from 'sharp';
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const dirs = ['products', 'capabilities'];

for (const dir of dirs) {
  const imgDir = join(__dirname, '..', 'src/images', dir);
  const files = readdirSync(imgDir).filter(f => extname(f) === '.png');

  for (const file of files) {
    const inputPath = join(imgDir, file);
    const outputPath = join(imgDir, file.replace('.png', '.webp'));

    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => console.log(`Converted: ${file} -> ${file.replace('.png', '.webp')}`))
      .catch(err => console.error(`Error converting ${file}:`, err));
  }
}
