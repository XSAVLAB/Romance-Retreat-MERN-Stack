const imagemin = require('imagemin').default;
const imageminWebp = require('imagemin-webp').default;
const path = require('path');
const fs = require('fs');

const inputDir = path.join(__dirname, 'src', 'components', 'images');
const outputDir = path.join(__dirname, 'src', 'components', 'images', 'webp');

(async () => {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = await imagemin([`${inputDir}/**/*.{jpg,png}`], {
    destination: outputDir,
    plugins: [
      imageminWebp({ quality: 85 })
    ]
  });

  console.log(`Converted ${files.length} images to .webp format in ${outputDir}`);
})();
