import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import testimonialRoutes from "./routes/testimonialRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/testimonials", testimonialRoutes);

app.get("/", (req, res) => res.send("✅ Testimonial API is running"));

export default app;
