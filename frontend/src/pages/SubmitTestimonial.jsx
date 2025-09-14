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
  useTheme,
} from "@mui/material";
import FormInput from "../components/FormInput";
import FileUpload from "../components/FileUpload";
import RatingStars from "../components/RatingStars";
import ConsentCheckbox from "../components/ConsentCheckbox";
import { submitTestimonial } from "../api/testimonialApi";
import { toast } from "react-toastify";

const steps = ["User Info", "Rating & Title", "Feedback & Consent"];

function SubmitTestimonial() {
  const theme = useTheme();
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
    <Box
      sx={{
        maxHeight: "50vh",
        py: 6,
        background: theme.palette.background.default,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Container maxWidth="md">
        {/* Header */}
        <Box
          sx={{
            p: 3,
            mb: 4,
            borderRadius: 3,
            background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
            color: theme.palette.common.white,
            textAlign: "center",
            boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
            animation: "fadeDown 0.6s ease",
            "@keyframes fadeDown": {
              from: { opacity: 0, transform: "translateY(-15px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          <Typography variant="h4" fontWeight={700} color="yellow">
            Submit Testimonial
          </Typography>
          <Typography variant="body1" color="yellow" sx={{ mt: 1, maxWidth: 600, mx: "auto" }}>
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
              color: theme.palette.primary.main,
            },
            "& .MuiStepLabel-label.Mui-completed": {
              color: theme.palette.success.main,
            },
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
            p: { xs: 3, sm: 4 },
            borderRadius: 3,
            background: theme.palette.background.paper,
            boxShadow: "0px 6px 20px rgba(0,0,0,0.08)",
            animation: "fadeUp 0.5s ease",
            "@keyframes fadeUp": {
              from: { opacity: 0, transform: "translateY(20px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
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
                  color: theme.palette.primary.main,
                  border: `1px solid ${theme.palette.primary.main}`,
                  textTransform: "none",
                  "&:hover": {
                    background: theme.palette.action.hover,
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
                  background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                  textTransform: "none",
                  boxShadow: "0 4px 12px rgba(37,117,252,0.3)",
                  transition: "all 0.3s ease",
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
                  background: `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                  textTransform: "none",
                  boxShadow: "0 4px 12px rgba(30,60,114,0.3)",
                  transition: "all 0.3s ease",
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
    </Box>
  );
}

export default SubmitTestimonial;
