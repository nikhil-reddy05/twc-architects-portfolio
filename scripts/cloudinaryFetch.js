// One-off dev script to export Cloudinary media metadata into a JSON file.
// Run with: node scripts/cloudinaryFetch.js "FOLDER/PATH/*"
// Requires .env.local with CLOUDINARY_* credentials (NOT NEXT_PUBLIC_*).
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { v2 as cloudinary } from "cloudinary";
import { writeFileSync } from "fs";
import path from "path";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, // public by design (appears in every URL)
  api_key: process.env.CLOUDINARY_API_KEY, // secret — never NEXT_PUBLIC_
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const expression =
  process.argv[2] || "INTERIORS/SILK_TOWER_306_LBNAGAR_2024/*";
const outFile = process.argv[3] || "cloudinaryImages.json";

cloudinary.search
  .expression(`folder:${expression}`)
  .execute()
  .then((result) => {
    const images = result.resources.map((img) => ({
      url: img.secure_url,
      width: img.width,
      height: img.height,
      format: img.format,
      resource_type: img.resource_type,
    }));

    const outPath = path.resolve(process.cwd(), outFile);
    writeFileSync(outPath, JSON.stringify(images, null, 2));
    console.log(`Exported ${images.length} items -> ${outPath}`);
  })
  .catch((err) => {
    console.error("Cloudinary fetch failed:", err);
    process.exit(1);
  });
