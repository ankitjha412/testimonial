import cloudinary from "./src/config/cloudinary.js";

cloudinary.api.ping()
  .then(res => console.log("✅ Cloudinary OK:", res))
  .catch(err => console.error("❌ Cloudinary Error:", err));
