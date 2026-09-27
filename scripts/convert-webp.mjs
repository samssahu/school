import sharp from 'sharp';
import { readdir, readFile } from 'fs/promises';
import { join, basename } from 'path';

const inputDir = './public/images';
const outputDir = './public/images/webp';

const images = [
  { file: 'hero.jpg', maxWidth: 1920, quality: 75 },
  { file: 'forhero1.jpg', maxWidth: 1920, quality: 75 },
  { file: 'forhero2.jpg', maxWidth: 1920, quality: 75 },
  { file: 'imageherofinal.jpg', maxWidth: 1200, quality: 80 },
  { file: 'principal.jpg', maxWidth: 400, quality: 80 },
  { file: 'principal-avatar.jpg', maxWidth: 200, quality: 80 },
  { file: 'college1.jpg', maxWidth: 800, quality: 75 },
  { file: 'college2.jpg', maxWidth: 800, quality: 75 },
  { file: 'college3.jpg', maxWidth: 800, quality: 75 },
  { file: 'college4.jpg', maxWidth: 800, quality: 75 },
  { file: 'college5.jpg', maxWidth: 800, quality: 75 },
  { file: 'college6.jpg', maxWidth: 800, quality: 75 },
];

console.log('Converting images to WebP...\n');

for (const img of images) {
  const inputPath = join(inputDir, img.file);
  const outputPath = join(outputDir, img.file.replace(/\.[^.]+$/, '.webp'));

  try {
    const originalSize = (await readFile(inputPath)).length;

    await sharp(inputPath)
      .resize(img.maxWidth, null, { withoutEnlargement: true })
      .webp({ quality: img.quality })
      .toFile(outputPath);

    const newSize = (await readFile(outputPath)).length;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

    console.log(`${img.file}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024).toFixed(0)}KB (${savings}% smaller)`);
  } catch (err) {
    console.error(`Error converting ${img.file}:`, err.message);
  }
}

// Also re-convert the ones that worked before
const bigImages = [
  { file: 'heroo.jpg', maxWidth: 1920, quality: 80 },
  { file: '12.jpg', maxWidth: 1920, quality: 80 },
  { file: 'imageherofinal.png', maxWidth: 1920, quality: 80 },
];

for (const img of bigImages) {
  const inputPath = join(inputDir, img.file);
  const outputPath = join(outputDir, img.file.replace(/\.[^.]+$/, '.webp'));

  try {
    const originalSize = (await readFile(inputPath)).length;

    await sharp(inputPath)
      .resize(img.maxWidth, null, { withoutEnlargement: true })
      .webp({ quality: img.quality })
      .toFile(outputPath);

    const newSize = (await readFile(outputPath)).length;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

    console.log(`${img.file}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024).toFixed(0)}KB (${savings}% smaller)`);
  } catch (err) {
    console.error(`Error converting ${img.file}:`, err.message);
  }
}

console.log('\nDone! WebP images saved to public/images/webp/');
