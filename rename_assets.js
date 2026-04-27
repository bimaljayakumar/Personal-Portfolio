const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'public/sequence');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.webp'));
// Sort to ensure sequential order
files.sort();

files.forEach((file, index) => {
    const newName = `${String(index).padStart(3, '0')}.webp`;
    fs.renameSync(path.join(dir, file), path.join(dir, newName));
});

console.log(`Renamed ${files.length} files.`);
