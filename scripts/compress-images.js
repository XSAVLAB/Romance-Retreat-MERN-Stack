// Image compression script for JPG, PNG, and WebP in /src/components/images/Services
// Usage: node scripts/compress-images.js

const imagemin = require('imagemin').default;
const imageminMozjpeg = require('imagemin-mozjpeg').default;
const imageminPngquant = require('imagemin-pngquant').default;
const imageminWebp = require('imagemin-webp').default;
const path = require('path');

const inputDir = path.join(__dirname, '../src/components/images/Services/*.{jpg,jpeg,png}');
const outputDir = path.join(__dirname, '../src/components/images/Services-optimized');

(async () => {
  const files = await imagemin([inputDir], {
    destination: outputDir,
    plugins: [
      imageminMozjpeg({ quality: 75 }),
      imageminPngquant({ quality: [0.7, 0.85] }),
      imageminWebp({ quality: 75 })
    ]
  });
  console.log(`Compressed ${files.length} images to ${outputDir}`);
})();
