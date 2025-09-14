import { useEffect, useState } from "react";
import { getTestimonials } from "../api/testimonialApi";
import TestimonialCard from "../components/TestimonialCard";
import Loader from "../components/Loader";
import { Grid, Container, Typography, Box } from "@mui/material";

function Home() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTestimonials()
      .then((res) => {
        console.log("✅ API Response:", res.data);
        setTestimonials(res.data);
      })
      .catch((err) => {
        console.error("❌ Error fetching testimonials:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  if (testimonials.length === 0) {
    return (
      <Container sx={{ mt: 6 }}>
        <Typography variant="h6" align="center" color="text.secondary">
          No approved testimonials yet.
        </Typography>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f4f7fb 0%, #e6ecf9 100%)", // ✅ soft background
        py: 6,
      }}
    >
      <Container>
        {/* Page Header */}
        <Box textAlign="center" mb={5}>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ color: "#1e3c72", mb: 1 }}
          >
            What People Say
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 600, mx: "auto", color: "text.secondary" }}
          >
            Read authentic feedback and testimonials from our valued users. 
            Every testimonial is carefully reviewed to ensure quality and trust.
          </Typography>
        </Box>

        {/* Testimonials Grid */}
        <Grid container spacing={3}>
          {testimonials.map((t, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={t._id}
              sx={{
                animation: "fadeUp 0.6s ease forwards",
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                "@keyframes fadeUp": {
                  from: { opacity: 0, transform: "translateY(20px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              <TestimonialCard testimonial={t} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
