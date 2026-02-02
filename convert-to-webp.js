// convert-to-webp.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// --- Configuration ---
const INPUT_DIR = path.join(process.cwd(), 'public');
const OUTPUT_DIR = path.join(process.cwd(), 'public/webp');

// Set for maximum width. Images wider than this will be downscaled.
const MAX_WIDTH = 1920;

// Aggressive Quality for lossy conversion (JPGs). Try 65-70.
const WEBP_QUALITY = 95;
const WEBP_LOSSLESS = false; // Use lossless conversion for PNGs by default

// --- Optimization Function ---
async function optimizeImages() {
  console.log('--- Starting conditional image optimization ---');

  // Function to process a directory recursively
  async function processDirectory(inputDir, outputDir) {
    // 1. Ensure the output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // 2. Read all files from the input directory
    const files = fs.readdirSync(inputDir);

    let processedCount = 0;
    for (const file of files) {
      const inputPath = path.join(inputDir, file);
      const stat = fs.statSync(inputPath);

      if (stat.isDirectory()) {
        // Skip certain directories
        if (file === 'webp' || file === 'optimized' || file === 'node_modules' || file === '.git') {
          continue;
        }
        
        // Recursively process subdirectory
        const subOutputDir = path.join(outputDir, file);
        const subProcessedCount = await processDirectory(inputPath, subOutputDir);
        processedCount += subProcessedCount;
      } else {
        const ext = path.extname(file).toLowerCase();

        if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
          const fileNameWithoutExt = path.parse(file).name;
          const outputPath = path.join(outputDir, `${fileNameWithoutExt}.webp`);

          try {
            let image = sharp(inputPath);

            // 3. Get image metadata to check its current width
            const metadata = await image.metadata();
            const originalWidth = metadata.width;

            // --- CONDITIONAL RESIZING LOGIC ---
            if (originalWidth > MAX_WIDTH) {
              // If the image is too wide, apply downscaling
              image = image.resize(MAX_WIDTH);
              console.log(`- SCALING DOWN: ${file} (${originalWidth}px -> ${MAX_WIDTH}px)`);
            } else {
              // If the image is smaller or equal, skip the resize step
              console.log(`- KEEPING SIZE: ${file} (${originalWidth}px)`);
            }

            // --- WEBP CONVERSION LOGIC ---
            if (ext === '.png') {
              // Lossless for PNG to preserve transparency and fidelity
              image = image.webp({
                lossless: WEBP_LOSSLESS,
                quality: WEBP_QUALITY // Quality is irrelevant if lossless is true
              });
            } else { // JPG or JPEG
              // Lossy for photos to reduce file size aggressively
              image = image.webp({
                quality: WEBP_QUALITY,
                lossless: WEBP_LOSSLESS
              });
            }

            await image.toFile(outputPath);
            processedCount++;

          } catch (error) {
            console.error(`❌ Failed to process ${file}:`, error.message);
          }
        }
      }
    }

    return processedCount;
  }

  // Start processing from the input directory
  const totalProcessed = await processDirectory(INPUT_DIR, OUTPUT_DIR);
  console.log(`\n--- Conditional image optimization complete. Total processed: ${totalProcessed} ---`);
}

optimizeImages();