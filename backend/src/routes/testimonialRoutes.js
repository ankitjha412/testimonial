import express from "express";
import {
  createTestimonial,
  getApprovedTestimonials,
  getTestimonialById,
  updateStatus,
  deleteTestimonial,
  getAllTestimonials,   // ✅ import new controller
} from "../controllers/testimonialController.js";
import { adminAuth } from "../middleware/adminAuth.js";
import upload from "../utils/upload.js";

const router = express.Router();

// Public routes
router.post(
  "/",
  upload.fields([
    { name: "profilePic", maxCount: 1 },
    { name: "media", maxCount: 1 },
  ]),
  createTestimonial
);

// Admin-only route (must be before :id to avoid conflicts)
router.get("/all", adminAuth, getAllTestimonials);   // ✅ new

// Public routes
router.get("/", getApprovedTestimonials);
router.get("/:id", getTestimonialById);

// Admin routes
router.put("/:id", adminAuth, updateStatus);
router.delete("/:id", adminAuth, deleteTestimonial);

export default router;
