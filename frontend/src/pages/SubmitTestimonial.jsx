import { useState } from "react";
import {
  Container,
  Button,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Box,
} from "@mui/material";
import FormInput from "../components/FormInput";
import FileUpload from "../components/FileUpload";
import RatingStars from "../components/RatingStars";
import ConsentCheckbox from "../components/ConsentCheckbox";
import { submitTestimonial } from "../api/testimonialApi";
import { toast } from "react-toastify";

const steps = ["User Info", "Rating & Title", "Feedback & Consent"];

function SubmitTestimonial() {
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    designation: "",
    company: "",
    rating: 1,
    title: "",
    feedback: "",
    consent: false,
    profilePic: null,
    media: null,
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFile = (e) =>
    setForm({ ...form, [e.target.name]: e.target.files[0] });

  const handleSubmit = async () => {
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => {
        if (v !== null) fd.append(k, v);
      });

      await submitTestimonial(fd);

      toast.success("✅ Testimonial submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        theme: "colored",
      });

      // reset form
      setActiveStep(0);
      setForm({
        fullName: "",
        email: "",
        designation: "",
        company: "",
        rating: 1,
        title: "",
        feedback: "",
        consent: false,
        profilePic: null,
        media: null,
      });
    } catch (err) {
      toast.error("❌ Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      {/* Header */}
      <Box
        sx={{
          p: 3,
          mb: 4,
          borderRadius: 3,
          background: "linear-gradient(90deg, #6a11cb, #2575fc)",
          color: "white",
          textAlign: "center",
          boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
        }}
      >
        <Typography variant="h4" fontWeight={700}>
          Submit Testimonial
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, maxWidth: 600, mx: "auto" }}>
          Share your valuable feedback with us. Your testimonial helps us grow
          and showcase authentic experiences.
        </Typography>
      </Box>

      {/* Stepper */}
      <Stepper
        activeStep={activeStep}
        sx={{
          mb: 4,
          "& .MuiStepLabel-label.Mui-active": {
            fontWeight: 700,
            color: "#2575fc",
          },
          "& .MuiStepLabel-label.Mui-completed": { color: "green" },
        }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Form Section */}
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
          background: "#fff",
          boxShadow: "0px 6px 20px rgba(0,0,0,0.08)",
        }}
      >
        {activeStep === 0 && (
          <>
            <FormInput
              label="Full Name"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Designation"
              name="designation"
              value={form.designation}
              onChange={handleChange}
            />
            <FormInput
              label="Company"
              name="company"
              value={form.company}
              onChange={handleChange}
            />
            <FileUpload
              label="Upload Profile Picture"
              name="profilePic"
              onChange={handleFile}
            />
          </>
        )}

        {activeStep === 1 && (
          <>
            <Typography variant="h6" mb={2} fontWeight={600}>
              Rate Us
            </Typography>
            <RatingStars
              value={form.rating}
              onChange={(val) => setForm({ ...form, rating: val })}
            />
            <FormInput
              label="Title"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </>
        )}

        {activeStep === 2 && (
          <>
            <FormInput
              label="Feedback"
              name="feedback"
              value={form.feedback}
              onChange={handleChange}
              required
            />
            <FileUpload
              label="Upload Media"
              name="media"
              onChange={handleFile}
            />
            <ConsentCheckbox
              checked={form.consent}
              onChange={(e) =>
                setForm({ ...form, consent: e.target.checked })
              }
            />
          </>
        )}

        {/* Navigation Buttons */}
        <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
          {activeStep > 0 && (
            <Button
              onClick={() => setActiveStep(activeStep - 1)}
              sx={{
                px: 4,
                py: 1,
                borderRadius: 2,
                fontWeight: 600,
                color: "#2575fc",
                border: "1px solid #2575fc",
                textTransform: "none",
                "&:hover": {
                  background: "#f0f5ff",
                },
              }}
            >
              Back
            </Button>
          )}
          {activeStep < steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={() => setActiveStep(activeStep + 1)}
              sx={{
                px: 4,
                py: 1,
                borderRadius: 2,
                fontWeight: 600,
                background: "linear-gradient(90deg, #6a11cb, #2575fc)",
                textTransform: "none",
                boxShadow: "0 4px 12px rgba(37,117,252,0.3)",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 6px 16px rgba(37,117,252,0.5)",
                },
              }}
            >
              Next
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{
                px: 4,
                py: 1,
                borderRadius: 2,
                fontWeight: 600,
                background: "linear-gradient(90deg, #1e3c72, #2a5298)",
                textTransform: "none",
                boxShadow: "0 4px 12px rgba(30,60,114,0.3)",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 6px 16px rgba(30,60,114,0.5)",
                },
              }}
            >
              Submit
            </Button>
          )}
        </Box>
      </Paper>
    </Container>
  );
}

export default SubmitTestimonial;
