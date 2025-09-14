import Testimonial from "../models/Testimonial.js";

// @POST create testimonial
export const createTestimonial = async (req, res) => {
  try {
    const { body, files } = req;

    console.log("📂 Uploaded files:", files);

    const testimonial = await Testimonial.create({
      ...body,
      profilePic: files?.profilePic?.[0]?.path || null,
      media: files?.media?.[0]?.path || null,
    });

    res.status(201).json(testimonial);
  } catch (error) {
    console.error("❌ Error creating testimonial:", error);
    res.status(500).json({ message: error.message });
  }
};

// @GET all approved testimonials
export const getApprovedTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ status: "approved" });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @GET single testimonial
export const getTestimonialById = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) return res.status(404).json({ message: "Not found" });
    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @PUT approve/reject testimonial (admin only)
export const updateStatus = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(testimonial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @DELETE remove testimonial
export const deleteTestimonial = async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @GET all testimonials (admin only)
export const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
