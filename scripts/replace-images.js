// Script to replace old images with optimized ones
// Usage: node scripts/replace-images.js

const fs = require('fs');
const path = require('path');

const oldDir = path.join(__dirname, '../src/components/images/Services');
const optimizedDir = path.join(__dirname, '../src/components/images/Services-optimized');

fs.readdir(optimizedDir, (err, files) => {
  if (err) throw err;
  let replaced = 0;
  files.forEach(file => {
    const src = path.join(optimizedDir, file);
    const dest = path.join(oldDir, file);
    if (fs.existsSync(dest)) {
      fs.copyFileSync(src, dest);
      replaced++;
    }
  });
  console.log(`Replaced ${replaced} images in ${oldDir} with optimized versions.`);
});
