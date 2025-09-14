import { Checkbox, FormControlLabel } from "@mui/material";

function ConsentCheckbox({ checked, onChange }) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          sx={{
            color: "#6a11cb", // default purple
            "&.Mui-checked": {
              color: "#2575fc", // blue when checked
            },
            "&:hover": {
              backgroundColor: "rgba(37,117,252,0.08)", // soft hover
              borderRadius: "6px",
            },
            transition: "all 0.25s ease-in-out",
          }}
        />
      }
      label="I consent to my testimonial being published"
      sx={{
        marginY: 1,
        ".MuiFormControlLabel-label": {
          fontSize: "0.95rem",
          fontWeight: 500,
          color: "#333",
          userSelect: "none",
        },
      }}
    />
  );
}

export default ConsentCheckbox;
