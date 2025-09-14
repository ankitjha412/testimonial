import { Checkbox, FormControlLabel } from "@mui/material";

function ConsentCheckbox({ checked, onChange }) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          sx={{
            // Base styling
            color: "#6a11cb", // default purple outline
            "&.Mui-checked": {
              color: "#2575fc", // blue when checked
              backgroundImage: "linear-gradient(90deg, #6a11cb, #2575fc)",
              borderRadius: "6px",
            },
            "&:hover": {
              backgroundColor: "rgba(37,117,252,0.08)", // subtle hover bg
              borderRadius: "6px",
            },
            // Smooth transition
            transition: "all 0.25s ease-in-out",
            // Larger hitbox for touch devices
            "@media (max-width:600px)": {
              transform: "scale(1.15)",
            },
            // Keyboard focus
            "&.Mui-focusVisible": {
              outline: "2px solid #2575fc",
              outlineOffset: "2px",
              borderRadius: "6px",
            },
          }}
        />
      }
      label="I consent to my testimonial being published"
      sx={{
        my: 1,
        alignItems: "center",
        ".MuiFormControlLabel-label": {
          fontSize: "0.95rem",
          fontWeight: 500,
          color: "#333",
          userSelect: "none",
          lineHeight: 1.4,
        },
      }}
    />
  );
}

export default ConsentCheckbox;
