// fg-generator.js
// Requires: npm install sharp

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const directory = __dirname;

async function processImage(file) {
  const inputPath = path.join(directory, file);

  const parsed = path.parse(file);
  const outputName = `${parsed.name}_FG.png`;
  const outputPath = path.join(directory, outputName);

  // Skip if FG already exists
  if (fs.existsSync(outputPath)) {
    console.log(`Skipping ${file} (FG already exists)`);
    return;
  }

  const image = sharp(inputPath);
  const metadata = await image.metadata();

  const { width, height } = metadata;

  let keepHeight;

  // 128x256 -> keep top half
  if (width === 128 && height === 256) {
    keepHeight = 128;
  }

  // 256x512 -> keep top 3/4ths
  else if (width === 256 && height === 512) {
    keepHeight = 384;
  }

  // Unsupported size
  else {
    console.log(`Skipping ${file} (unsupported dimensions ${width}x${height})`);
    return;
  }

  // Create fully transparent canvas
  const transparentCanvas = sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  });

  // Extract the visible top portion
  const topPart = await image
    .extract({
      left: 0,
      top: 0,
      width,
      height: keepHeight,
    })
    .png()
    .toBuffer();

  // Composite only the kept section onto transparent canvas
  await transparentCanvas
    .composite([
      {
        input: topPart,
        top: 0,
        left: 0,
      },
    ])
    .png()
    .toFile(outputPath);

  console.log(`Created ${outputName}`);
}

async function main() {
  const files = fs
    .readdirSync(directory)
    .filter((file) => file.toLowerCase().endsWith(".png"))
    .filter((file) => !file.endsWith("_FG.png"));

  for (const file of files) {
    try {
      await processImage(file);
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }

  console.log("Done!");
}

main();