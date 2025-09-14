import axios from "axios";

const API = axios.create({ baseURL: " https://testimonial-eirx.onrender.com/api/testimonials" });

// Public
export const submitTestimonial = (formData) =>
  API.post("/", formData, { headers: { "Content-Type": "multipart/form-data" } });

export const getTestimonials = () => API.get("/"); // approved only
export const getTestimonialById = (id) => API.get(`/${id}`);

// Admin
export const getAllTestimonials = (email, password) =>
  API.get("/all", { headers: { email, password } });

export const updateTestimonial = (id, status, email, password) =>
  API.put(
    `/${id}`,
    { status },
    { headers: { email, password } }
  );

export const deleteTestimonial = (id, email, password) =>
  API.delete(`/${id}`, { headers: { email, password } });
