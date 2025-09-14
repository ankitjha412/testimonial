import { TextField } from "@mui/material";

function FormInput({ label, value, onChange, name, type = "text", required }) {
  return (
    <TextField
      fullWidth
      margin="normal"
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}

export default FormInput;
