// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#334155", // Slate Gray (headers, navbar, buttons)
    },
    secondary: {
      main: "#2563EB", // Bright Blue (accents, highlights)
    },
    success: {
      main: "#84CC16", // Lime Green (success states)
    },
    warning: {
      main: "#F59E0B", // Amber (warnings, pending)
    },
    error: {
      main: "#EF4444", // Rose Red (errors, delete)
    },
    info: {
      main: "#0EA5E9", // Sky Blue (neutral info)
    },
    background: {
      default: "#F8FAFC", // Page background
      paper: "#FFFFFF",   // Cards / panels
    },
    text: {
      primary: "#374151",   // Body text (neutral gray)
      secondary: "#6B7280", // Muted text
    },
    divider: "#E5E7EB", // Light gray borders
  },
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
    h1: { fontWeight: 700, color: "#111827" }, // Dark navy headings
    h2: { fontWeight: 700, color: "#111827" },
    h3: { fontWeight: 700, color: "#111827" },
    h4: { fontWeight: 700, color: "#111827" },
    h5: { fontWeight: 600, color: "#111827" },
    h6: { fontWeight: 600, color: "#111827" },
    body1: { color: "#374151" },
    body2: { color: "#6B7280" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.02)",
          },
        },
        containedPrimary: {
          background: "linear-gradient(90deg, #334155, #2563EB)",
          color: "#fff",
          "&:hover": {
            background: "linear-gradient(90deg, #2563EB, #334155)",
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          background: "linear-gradient(90deg, #6366F1, #3B82F6)", // Indigo → Blue
          "& .MuiTableCell-head": {
            color: "#fff",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          },
        },
      },
    },
  },
});

export default theme;
