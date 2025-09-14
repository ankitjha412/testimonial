import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";

function AdminLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(form.email, form.password)) {
      navigate("/admin/dashboard");
    } else {
      setError("Invalid credentials. Please check your email and password.");
    }
  };

  return (
    <Container
      sx={{
        mt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: 400,
          borderRadius: 3,
          textAlign: "center",
          background: "linear-gradient(135deg, #f4f7fb, #e6ecf9)", // ✅ soft light blue card
          boxShadow: "0 8px 24px rgba(30,60,114,0.15)",
          animation: "fadeIn 0.6s ease-in-out",
          "@keyframes fadeIn": {
            from: { opacity: 0, transform: "translateY(10px)" },
            to: { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        {/* Header */}
        <Typography
          variant="h5"
          fontWeight={700}
          mb={1}
          sx={{ color: "#1e3c72" }} // ✅ deep blue heading
        >
          Admin Login
        </Typography>
        <Typography
          variant="body2"
          sx={{ mb: 3, lineHeight: 1.6, color: "#4a5568" }} // muted gray
        >
          Please enter your credentials to access the admin dashboard.  
          <br />
          <strong>Default Credentials:</strong> <br />
          Email: <code>admin@demo.com</code> <br />
          Password: <code>admin123</code>
        </Typography>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
          {error && (
            <Typography
              color="error"
              variant="body2"
              sx={{ mt: 1, fontWeight: 500 }}
            >
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              py: 1.2,
              fontWeight: 600,
              borderRadius: 2,
              background: "linear-gradient(90deg, #1e3c72, #2a5298)", // ✅ blue gradient
              boxShadow: "0px 4px 12px rgba(30,60,114,0.3)",
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.03)",
                background: "linear-gradient(90deg, #2a5298, #1e3c72)", // reverse gradient
                boxShadow: "0px 6px 16px rgba(30,60,114,0.5)",
              },
            }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default AdminLogin;
