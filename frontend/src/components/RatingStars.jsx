import { Rating } from "@mui/material";

function RatingStars({ value, onChange }) {
  return (
    <Rating
      name="rating"
      value={value}
      precision={0.5} // allows half-stars
      onChange={(_, newValue) => onChange(newValue)}
      sx={{
        fontSize: "2.2rem", // bigger stars
        color: "#FFD700", // gold color for filled stars
        "& .MuiRating-iconEmpty": {
          color: "#ccc", // gray for empty stars
        },
        "& .MuiRating-iconHover": {
          transform: "scale(1.2)", // grow on hover
          transition: "transform 0.2s ease",
          filter: "drop-shadow(0px 0px 6px rgba(255,215,0,0.6))", // glowing effect
        },
        "& .MuiRating-iconFilled": {
          color: "#FFD700",
          textShadow: "0px 0px 6px rgba(255,215,0,0.6)", // glow filled stars
          transition: "all 0.2s ease",
        },
      }}
    />
  );
}

export default RatingStars;
