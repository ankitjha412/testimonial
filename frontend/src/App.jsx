import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SubmitTestimonial from "./pages/SubmitTestimonial";
import TestimonialPage from "./pages/TestimonialPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import { Box, Container, useTheme } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const theme = useTheme(); // ✅ access theme colors

  return (
    <Router>
      {/* App Layout */}
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.palette.background.default, // ✅ use theme background
        }}
      >
        {/* Navbar */}
        <Box sx={{ flexShrink: 0 }}>
          <Navbar />
        </Box>

        {/* Main Content */}
        <Box
          component={Container}
          maxWidth="lg"
          sx={{
            flex: 1,
            overflowY: "auto",
            py: 3,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/submit" element={<SubmitTestimonial />} />
            <Route path="/testimonial/:id" element={<TestimonialPage />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </Box>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            flexShrink: 0,
            textAlign: "center",
            py: 2,
            background: theme.palette.primary.main, // ✅ theme primary color
            color: theme.palette.common.white, // ✅ theme white
            fontSize: "0.9rem",
            boxShadow: "0px -2px 6px rgba(0,0,0,0.1)", // subtle top shadow
          }}
        >
          © {new Date().getFullYear()} Testimonial System. All rights reserved.
        </Box>
      </Box>

      {/* ✅ Toast Container */}
      <ToastContainer />
    </Router>
  );
}

export default App;
