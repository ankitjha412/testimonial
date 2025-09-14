import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
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
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #eef2f7 0%, #dce3f0 100%)", // ✅ page background
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 3,
            textAlign: "center",
            background: "linear-gradient(135deg, #f4f7fb, #e6ecf9)", // ✅ card gradient
            boxShadow: "0 8px 24px rgba(30,60,114,0.15)",
            animation: "fadeIn 0.6s ease-in-out",
            width: { xs: "100%", sm: 400 },
            mx: "auto",
            "@keyframes fadeIn": {
              from: { opacity: 0, transform: "translateY(12px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          {/* Header */}
          <Typography
            variant="h5"
            fontWeight={700}
            mb={1}
            sx={{ color: "#1e3c72" }}
          >
            Admin Login
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 3, lineHeight: 1.6, color: "#4a5568" }}
          >
            Please enter your credentials to access the admin dashboard.
            <br />
            <Box
              sx={{
                mt: 2,
                p: 1,
                borderRadius: 2,
                backgroundColor: "#edf2f7",
                fontFamily: "monospace",
                fontSize: "0.85rem",
                color: "#2a4365",
                textAlign: "left",
              }}
            >
              <strong>Demo Credentials:</strong>
              <br />
              Email: admin@demo.com <br />
              Password: admin123
            </Box>
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
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  "&:hover fieldset": { borderColor: "#1e3c72" },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1e3c72",
                    boxShadow: "0 0 6px rgba(30,60,114,0.3)",
                  },
                },
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  "&:hover fieldset": { borderColor: "#1e3c72" },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1e3c72",
                    boxShadow: "0 0 6px rgba(30,60,114,0.3)",
                  },
                },
              }}
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
                background: "linear-gradient(90deg, #1e3c72, #2a5298)",
                boxShadow: "0px 4px 12px rgba(30,60,114,0.3)",
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                  background: "linear-gradient(90deg, #2a5298, #1e3c72)",
                  boxShadow: "0px 6px 16px rgba(30,60,114,0.5)",
                },
              }}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}

export default AdminLogin;
