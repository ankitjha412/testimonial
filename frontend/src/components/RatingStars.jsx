import { Rating } from "@mui/material";

function RatingStars({ value, onChange }) {
  return (
    <Rating
      name="rating"
      value={value}
      precision={0.5} // ✅ half-stars supported
      onChange={(_, newValue) => onChange(newValue)}
      getLabelText={(ratingValue) => `Rated ${ratingValue} out of 5`}
      sx={{
        fontSize: { xs: "1.8rem", sm: "2.2rem" }, // ✅ responsive size
        color: "#FFD700", // gold for filled
        "& .MuiRating-iconEmpty": {
          color: "#ccc", // gray for empty
        },
        "& .MuiRating-iconFilled": {
          color: "#FFD700",
          textShadow: "0px 0px 6px rgba(255, 215, 0, 0.6)", // ✅ subtle glow
          transition: "all 0.2s ease",
        },
        "& .MuiRating-iconHover": {
          transform: "scale(1.2)", // ✅ smooth hover scale
          filter: "drop-shadow(0px 0px 6px rgba(255, 215, 0, 0.6))", // glowing aura
          transition: "transform 0.2s ease, filter 0.2s ease",
        },
        "& .MuiRating-iconFocus": {
          outline: "2px solid #2575fc", // ✅ keyboard focus visible
          outlineOffset: "2px",
          borderRadius: "4px",
        },
      }}
    />
  );
}

export default RatingStars;
