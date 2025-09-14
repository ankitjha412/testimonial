import {
  Avatar,
  Typography,
  Rating,
  Paper,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function TestimonialDetail({ testimonial }) {
  if (!testimonial) return null;

  return (
    <Paper
  elevation={4}
  sx={{
    p: 4,
    borderRadius: 4,
    background: "linear-gradient(135deg, #fdfbfb, #ebedee)", // ✅ soft gradient
    boxShadow: "0px 6px 20px rgba(0,0,0,0.1)",
    animation: "fadeIn 0.5s ease-in-out",
    "@keyframes fadeIn": {
      from: { opacity: 0, transform: "translateY(10px)" },
      to: { opacity: 1, transform: "translateY(0)" },
    },
    transition: "all 0.3s ease",
  }}
>
  {/* Back Button */}
  <Button
    component={Link}
    to="/"
    startIcon={<ArrowBackIcon />}
    sx={{
      mb: 3,
      textTransform: "none",
      fontWeight: 600,
      fontSize: "0.95rem",
      color: "#2575fc",
      transition: "all 0.3s ease",
      "&:hover": {
        color: "#6a11cb",
        transform: "translateX(-4px)",
      },
    }}
  >
    Back
  </Button>

  {/* User Info */}
  <Box display="flex" alignItems="center" gap={2} mb={2}>
    <Avatar
      src={testimonial.profilePic}
      alt={testimonial.fullName}
      sx={{
        width: 72,
        height: 72,
        border: "3px solid #2575fc",
        boxShadow: "0 4px 10px rgba(37,117,252,0.3)",
      }}
    />
    <Box>
      <Typography variant="h6" fontWeight={700} color="#222">
        {testimonial.fullName}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {testimonial.designation}{" "}
        {testimonial.company && `@ ${testimonial.company}`}
      </Typography>
    </Box>
  </Box>

  {/* Rating */}
  <Rating
    value={testimonial.rating}
    readOnly
    precision={0.5}
    sx={{
      mb: 2,
      fontSize: "1.8rem",
      color: "#FFD700",
      "& .MuiRating-iconFilled": {
        textShadow: "0px 0px 6px rgba(255,215,0,0.6)", // ✅ glowing gold
      },
    }}
  />

  {/* Title */}
  <Typography
    variant="h5"
    sx={{ fontWeight: 700, color: "#222", mb: 1 }}
  >
    {testimonial.title}
  </Typography>

  {/* Feedback */}
  <Typography
    variant="body1"
    sx={{ lineHeight: 1.7, fontSize: "1rem", color: "#444", mb: 2 }}
  >
    {testimonial.feedback}
  </Typography>

  {/* Media */}
  {testimonial.media && (
    <Box mt={3}>
      <Box
        component="img"
        src={testimonial.media}
        alt="testimonial media"
        sx={{
          maxWidth: "100%",
          borderRadius: 2,
          boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
          },
        }}
      />
    </Box>
  )}
</Paper>

  );
}

export default TestimonialDetail;
