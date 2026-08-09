/**
 * Every videoUrl in the tutorials must point at a file that exists.
 *
 * Six tutorials shipped pointing at videos that were never added. The page
 * only hides the player when videoUrl is empty, so a wrong path rendered a
 * dead player AND emitted VideoObject structured data with a contentUrl that
 * 404s — invisible in review, visible to Google.
 */
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'lib', 'tutorials');
const videos = path.join(__dirname, '..', 'public', 'videos');
const have = new Set(fs.readdirSync(videos));

let bad = 0;
for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.ts'))) {
  const src = fs.readFileSync(path.join(dir, file), 'utf8');
  for (const m of src.matchAll(/videoUrl: '\/videos\/([^']+)'/g)) {
    if (!have.has(m[1])) {
      console.error(`  MISSING  ${file}  ->  /videos/${m[1]}`);
      bad++;
    }
  }
}

if (bad) {
  console.error(`\n${bad} tutorial video reference(s) point at files that do not exist.`);
  console.error('Add the video, or set videoUrl to an empty string until it exists.');
  process.exit(1);
}
console.log('All tutorial video references resolve to real files.');
