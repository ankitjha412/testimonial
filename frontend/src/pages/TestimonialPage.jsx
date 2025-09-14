import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTestimonialById } from "../api/testimonialApi";
import Loader from "../components/Loader";
import TestimonialDetail from "../components/TestimonialDetail";
import { Container, Typography, Box } from "@mui/material";

function TestimonialPage() {
  const { id } = useParams();
  const [testimonial, setTestimonial] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTestimonialById(id)
      .then((res) => setTestimonial(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;
  if (!testimonial)
    return (
      <Container sx={{ mt: 6, textAlign: "center" }}>
        <Typography
          variant="h6"
          sx={{ color: "text.secondary", fontWeight: 500 }}
        >
          ❌ Testimonial not found
        </Typography>
      </Container>
    );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f4f7fb 0%, #e6ecf9 100%)", // soft background
        py: 6,
      }}
    >
      <Container maxWidth="md">
        {/* Page Header */}
        <Typography
          variant="h4"
          fontWeight={700}
          align="center"
          sx={{ mb: 4, color: "#1e3c72" }}
        >
          Testimonial Details
        </Typography>

        {/* Testimonial Card */}
        <TestimonialDetail testimonial={testimonial} />
      </Container>
    </Box>
  );
}

export default TestimonialPage;
