import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTestimonialById } from "../api/testimonialApi";
import Loader from "../components/Loader";
import TestimonialDetail from "../components/TestimonialDetail";
import { Container, Typography, Box, Button } from "@mui/material";

function TestimonialPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [testimonial, setTestimonial] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTestimonialById(id)
      .then((res) => setTestimonial(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f4f7fb 0%, #e6ecf9 100%)",
          animation: "fadeIn 0.6s ease-in-out",
          "@keyframes fadeIn": {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
        }}
      >
        <Loader />
        <Typography sx={{ mt: 2, color: "text.secondary" }}>
          Loading testimonial…
        </Typography>
      </Box>
    );

  if (!testimonial)
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f4f7fb 0%, #e6ecf9 100%)",
        }}
      >
        <Container sx={{ textAlign: "center" }}>
          <Typography
            variant="h6"
            sx={{ color: "error.main", fontWeight: 600, mb: 2 }}
          >
            ❌ Testimonial not found
          </Typography>
          <Button
            variant="outlined"
            onClick={() => navigate("/")}
            sx={{
              borderColor: "#2575fc",
              color: "#2575fc",
              textTransform: "none",
              "&:hover": { background: "#f0f5ff" },
            }}
          >
            Back to Home
          </Button>
        </Container>
      </Box>
    );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f4f7fb 0%, #e6ecf9 100%)",
        py: 6,
        animation: "fadeIn 0.6s ease-in-out",
        "@keyframes fadeIn": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      }}
    >
      <Container maxWidth="md">
        {/* Page Header */}
        <Typography
          variant="h4"
          fontWeight={700}
          align="center"
          sx={{
            mb: 2,
            color: "#1e3c72",
            borderBottom: "2px solid #2575fc",
            display: "inline-block",
            px: 2,
          }}
        >
          Testimonial Details
        </Typography>

        {/* Testimonial Card */}
        <Box
          sx={{
            mt: 4,
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            },
          }}
        >
          <TestimonialDetail testimonial={testimonial} />
        </Box>
      </Container>
    </Box>
  );
}

export default TestimonialPage;
