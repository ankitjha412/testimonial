import { Box } from "@mui/material";

function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "120px", // breathing room
      }}
    >
      <Box
        role="progressbar"
        aria-busy="true"
        aria-label="Loading"
        sx={{
          width: { xs: 40, sm: 60 }, // responsive size
          height: { xs: 40, sm: 60 },
          borderRadius: "50%",
          border: "5px solid transparent",
          background:
            "conic-gradient(from 0deg, #6a11cb, #2575fc, #6a11cb)", // gradient ring
          animation: "spin 1.2s linear infinite",
          boxShadow: "0px 0px 15px rgba(37,117,252,0.4)", // glowing outer effect
          "@keyframes spin": {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
        }}
      />
    </Box>
  );
}

export default Loader;
