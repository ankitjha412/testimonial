import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  getAllTestimonials,
  updateTestimonial,
  deleteTestimonial,
} from "../api/testimonialApi";
import Loader from "../components/Loader";
import {
  Container,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import AdminTable from "../components/AdminTable";

function AdminDashboard() {
  const { admin } = useAuth();
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAll = () => {
    getAllTestimonials(admin.email, "admin123")
      .then((res) => setTestimonials(res.data))
      .catch((err) => console.error("❌ Error fetching testimonials:", err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (admin) fetchAll();
  }, [admin]);

  if (!admin) return <Typography>Unauthorized</Typography>;
  if (loading) return <Loader />;

  const handleAction = async (id, action) => {
    if (action === "delete") {
      await deleteTestimonial(id, admin.email, "admin123");
    } else {
      await updateTestimonial(id, action, admin.email, "admin123");
    }
    fetchAll();
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
      {/* Header Section */}
      <Box
        sx={{
          p: 4,
          mb: 4,
          borderRadius: 3,
          background: "linear-gradient(90deg, #6a11cb, #2575fc)",
          color: "white",
          textAlign: "center",
          boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
          animation: "fadeDown 0.6s ease-in-out",
          "@keyframes fadeDown": {
            from: { opacity: 0, transform: "translateY(-20px)" },
            to: { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        <Typography variant="h4" fontWeight={700} gutterBottom color="yellow">
          Admin Dashboard
        </Typography>
        <Typography

          variant="body1"
          sx={{ maxWidth: 700, mx: "auto", color: "yellow" } }
        >
          Manage all submitted testimonials here. You can review, approve, reject, 
          or delete testimonials. This ensures only the best and most authentic 
          feedback is published on the platform.
        </Typography>
      </Box>

      {/* Table Section */}
      <Paper
        elevation={4}
        sx={{
          p: 2,
          borderRadius: 3,
          background: "#fff",
          overflowX: "auto", // ✅ responsive scroll on mobile
          animation: "fadeIn 0.6s ease-in-out",
          "@keyframes fadeIn": {
            from: { opacity: 0, transform: "translateY(15px)" },
            to: { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        <AdminTable
          testimonials={testimonials}
          onApprove={(id) => handleAction(id, "approved")}
          onReject={(id) => handleAction(id, "rejected")}
          onDelete={(id) => handleAction(id, "delete")}
        />
      </Paper>
    </Container>
  );
}

export default AdminDashboard;
