import axios from "axios";
import FormData from "form-data";
import fs from "fs";

const API_URL = "http://localhost:5000/api/testimonials";

// Helper: print results neatly
const log = (title, res) => {
  console.log("\n=== " + title + " ===");
  console.log(res.data);
};

(async () => {
  try {
    // 1. Create testimonial (with file upload)
    const form = new FormData();
    form.append("fullName", "Ankit Jha");
    form.append("email", "ankit@example.com");
    form.append("designation", "Developer");
    form.append("company", "SRM AP");
    form.append("rating", "5");
    form.append("title", "Amazing Experience");
    form.append("feedback", "This platform was great for learning!");
    form.append("consent", "true");

    // Attach profile pic (optional) – replace with real file path
    if (fs.existsSync("./sample.jpg")) {
      form.append("profilePic", fs.createReadStream("./sample.jpg"));
    }

    const createRes = await axios.post(API_URL, form, {
      headers: form.getHeaders(),
    });
    log("Created Testimonial", createRes);

    const testimonialId = createRes.data._id;

    // 2. Get all approved testimonials
    const getAllRes = await axios.get(API_URL);
    log("Approved Testimonials", getAllRes);

    // 3. Get single testimonial by ID
    const getOneRes = await axios.get(`${API_URL}/${testimonialId}`);
    log("Single Testimonial", getOneRes);

    // 4. Approve testimonial (admin)
    const approveRes = await axios.put(
      `${API_URL}/${testimonialId}`,
      { status: "approved" },
      {
        headers: { email: "admin@demo.com", password: "admin123" },
      }
    );
    log("Approved Testimonial", approveRes);

    // 5. Delete testimonial (admin)
    const deleteRes = await axios.delete(`${API_URL}/${testimonialId}`, {
      headers: { email: "admin@demo.com", password: "admin123" },
    });
    log("Deleted Testimonial", deleteRes);

    console.log("\n✅ All API tests completed!");
  } catch (error) {
    console.error("\n❌ API Test Error:", error.response?.data || error.message);
  }
})();
