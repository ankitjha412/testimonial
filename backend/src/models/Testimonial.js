import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    designation: String,
    company: String,
    profilePic: String, // Cloudinary URL
    rating: { type: Number, required: true, min: 1, max: 5 },
    title: { type: String, required: true },
    feedback: { type: String, required: true },
    media: String, // Cloudinary URL
    consent: { type: Boolean, required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Testimonial", testimonialSchema);
