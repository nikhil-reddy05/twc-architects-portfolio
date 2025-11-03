import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { v2 as cloudinary } from "cloudinary";
import { writeFileSync } from "fs";

// Setup credentials (from your Cloudinary dashboard)
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

cloudinary.search
  .expression("folder:INTERIORS/SILK_TOWER_306_LBNAGAR_2024/*")
  .execute()
  .then((result) => {
    console.log(result.resources);
    const images = result.resources.map((img) => ({
      url: img.secure_url,
      width: img.width,
      height: img.height,
      format: img.format,
      resource_type: img.resource_type,
    }));

    writeFileSync("./utils/architectureImages.json", JSON.stringify(images, null, 2));

    console.log("Image data exported!");
  });
