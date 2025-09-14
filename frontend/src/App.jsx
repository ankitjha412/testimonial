import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SubmitTestimonial from "./pages/SubmitTestimonial";
import TestimonialPage from "./pages/TestimonialPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import { Box, Container } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      {/* App Layout */}
      <Box
        sx={{
          height: "100vh", // Full viewport height
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Navbar (fixed at top) */}
        <Box sx={{ flexShrink: 0 }}>
          <Navbar />
        </Box>

        {/* Main content (scrollable container) */}
        <Box
          component={Container}
          maxWidth="lg"
          sx={{
            flex: 1,
            overflowY: "auto", // make this area scrollable
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

        {/* Footer (fixed at bottom) */}
        <Box
          component="footer"
          sx={{
            flexShrink: 0,
            textAlign: "center",
            py: 2,
            background: "#1e3c72",
            color: "white",
            fontSize: "0.9rem",
          }}
        >
          © {new Date().getFullYear()} Testimonial System. All rights reserved.
        </Box>
      </Box>

      {/* ✅ Toast container should be outside Routes */}
      <ToastContainer />
    </Router>
  );
}

export default App;
