import fs from 'fs';
import path from 'path';

function findUploadedFiles(dir, depth = 0) {
  if (depth > 5) return;
  try {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      const filePath = path.join(dir, file);
      try {
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          const lower = file.toLowerCase();
          if (
            file !== 'node_modules' &&
            file !== '.git' &&
            file !== 'proc' &&
            file !== 'sys' &&
            file !== 'dev' &&
            file !== 'dist' &&
            file !== 'usr' &&
            file !== 'lib' &&
            file !== 'lib64' &&
            file !== 'var' &&
            file !== 'etc' &&
            file !== 'run' &&
            file !== 'boot'
          ) {
            findUploadedFiles(filePath, depth + 1);
          }
        } else {
          // Look for any image file or custom file name
          if (file.match(/\.(jpg|jpeg|png|webp|gif)$/i)) {
            console.log(`FOUND FILE: ${filePath} (${stat.size} bytes)`);
          }
        }
      } catch (e) {}
    });
  } catch (e) {}
}

console.log("Searching root for images...");
findUploadedFiles('/');
console.log("Finished searching root.");
