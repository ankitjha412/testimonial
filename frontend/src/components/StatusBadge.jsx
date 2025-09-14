import { Chip } from "@mui/material";

function StatusBadge({ status }) {
  let chipProps = {
    label: status.charAt(0).toUpperCase() + status.slice(1), // Capitalize
    sx: {
      fontWeight: 600,
      textTransform: "capitalize",
      px: 1.5,
      py: 0.5,
      fontSize: "0.85rem",
      letterSpacing: 0.5,
      animation: "fadeIn 0.4s ease-in-out",
      "@keyframes fadeIn": {
        from: { opacity: 0, transform: "scale(0.9)" },
        to: { opacity: 1, transform: "scale(1)" },
      },
    },
  };

  if (status === "approved") {
    chipProps.color = "success";
    chipProps.sx = { ...chipProps.sx, bgcolor: "#4caf50", color: "white" };
  }
  if (status === "rejected") {
    chipProps.color = "error";
    chipProps.sx = { ...chipProps.sx, bgcolor: "#f44336", color: "white" };
  }
  if (status === "pending") {
    chipProps.color = "warning";
    chipProps.sx = { ...chipProps.sx, bgcolor: "#ff9800", color: "white" };
  }

  return <Chip {...chipProps} />;
}

export default StatusBadge;
