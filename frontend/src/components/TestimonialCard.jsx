import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Rating,
  CardActionArea,
  Box,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

function TestimonialCard({ testimonial }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 4,
        overflow: "hidden",
        background: theme.palette.background.paper, // ✅ card background
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px) scale(1.02)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.18)",
          cursor: "pointer",
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
          height: "100%",
        }}
      >
        {/* Avatar with animated glow ring */}
        <Box
          sx={{
            position: "relative",
            mb: 2,
            display: "inline-flex",
            justifyContent: "center",
            "&::after": {
              content: '""',
              position: "absolute",
              top: -4,
              left: -4,
              width: "calc(100% + 8px)",
              height: "calc(100% + 8px)",
              borderRadius: "50%",
              background: `conic-gradient(from 180deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              zIndex: -1,
              animation: "spin 5s linear infinite",
            },
            "@keyframes spin": {
              "0%": { transform: "rotate(0deg)" },
              "100%": { transform: "rotate(360deg)" },
            },
          }}
        >
          <Avatar
            src={testimonial.profilePic || ""}
            alt={testimonial.fullName || "User"}
            sx={{
              width: 80,
              height: 80,
              bgcolor: theme.palette.primary.main,
              fontWeight: 600,
              fontSize: "1.2rem",
              color: theme.palette.common.white,
            }}
          >
            {testimonial.fullName?.[0]}
          </Avatar>
        </Box>

        {/* Name */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: theme.palette.text.primary,
            mb: 0.5,
            transition: "color 0.3s ease",
            "&:hover": { color: theme.palette.primary.main },
          }}
        >
          {testimonial.fullName}
        </Typography>

        {/* Title */}
        <Typography
          variant="body2"
          sx={{ color: theme.palette.text.secondary, mb: 1 }}
        >
          {testimonial.title}
        </Typography>

        {/* Rating */}
        <Rating
          value={testimonial.rating}
          readOnly
          precision={0.5}
          sx={{
            color: "#FFD700", // ✅ gold stars
            mb: 1,
            "& .MuiRating-iconEmpty": { color: "#ddd" },
          }}
        />

        {/* Testimonial Text */}
        <Typography
          variant="body2"
          sx={{
            mt: 2,
            color: theme.palette.text.secondary,
            lineHeight: 1.6,
            fontStyle: "italic",
            px: 1,
          }}
        >
          “{testimonial.message}”
        </Typography>
      </CardActionArea>
    </Card>
  );
}

export default TestimonialCard;
