import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Rating,
  CardActionArea,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

function TestimonialCard({ testimonial }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        m: 2,
        borderRadius: 4,
        overflow: "hidden",
        background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px) scale(1.02)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
        },
      }}
    >
      <CardActionArea
        component={Link}
        to={`/testimonial/${testimonial._id}`}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 3,
          textAlign: "center",
        }}
      >
        {/* Avatar with glow ring */}
        <Box
          sx={{
            position: "relative",
            mb: 2,
            "&::after": {
              content: '""',
              position: "absolute",
              top: -4,
              left: -4,
              width: "calc(100% + 8px)",
              height: "calc(100% + 8px)",
              borderRadius: "50%",
              background:
                "conic-gradient(from 180deg, #6a11cb, #2575fc, #6a11cb)",
              zIndex: -1,
              animation: "spin 4s linear infinite",
            },
            "@keyframes spin": {
              "0%": { transform: "rotate(0deg)" },
              "100%": { transform: "rotate(360deg)" },
            },
          }}
        >
          <Avatar
            src={testimonial.profilePic}
            alt={testimonial.fullName}
            sx={{ width: 80, height: 80 }}
          />
        </Box>

        {/* Name */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "#222",
            mb: 0.5,
            transition: "color 0.3s",
            "&:hover": { color: "#2575fc" },
          }}
        >
          {testimonial.fullName}
        </Typography>

        {/* Title */}
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", mb: 1 }}
        >
          {testimonial.title}
        </Typography>

        {/* Rating */}
        <Rating value={testimonial.rating} readOnly precision={0.5} />
      </CardActionArea>
    </Card>
  );
}

export default TestimonialCard;
