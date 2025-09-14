import { TextField } from "@mui/material";

function FormInput({ label, value, onChange, name, type = "text", required, error, helperText }) {
  return (
    <TextField
      fullWidth
      margin="normal"
      label={label + (required ? " *" : "")} // ✅ Required indicator
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      error={error}
      helperText={helperText}
      variant="outlined"
      InputProps={{
        sx: {
          borderRadius: "10px",
          backgroundColor: "#f9fafc",
          fontSize: "15px",
          fontWeight: 500,
          height: "48px",
          transition: "all 0.25s ease-in-out",
          color: "#333",

          "& input::placeholder": {
            color: "#aaa",
            opacity: 1,
            transition: "opacity 0.2s ease",
          },

          "&:hover": {
            backgroundColor: "#f1f4f9", // ✅ hover effect
          },

          "&.Mui-focused": {
            backgroundColor: "#fff",
            boxShadow: "0px 0px 6px rgba(37,117,252,0.3)", // ✅ glow on focus
          },
        },
      }}
      InputLabelProps={{
        sx: {
          fontSize: "0.95rem",
          fontWeight: 500,
          color: "#666",
          transition: "all 0.2s ease-in-out",

          "&.Mui-focused": {
            color: "#2575fc", // ✅ brand color on focus
          },
          "&.Mui-error": {
            color: "#e63946", // ✅ error label
          },
        },
      }}
      FormHelperTextProps={{
        sx: {
          fontSize: "0.85rem",
          mt: 0.5,
          color: error ? "#e63946" : "#666",
        },
      }}
    />
  );
}

export default FormInput;
