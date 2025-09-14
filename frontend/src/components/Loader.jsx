import { CircularProgress, Box } from "@mui/material";

function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 6,
        minHeight: "120px",
      }}
    >
      <CircularProgress
        size={60}
        thickness={5}
        sx={{
          color: "transparent",
          background:
            "conic-gradient(from 180deg, #6a11cb, #2575fc, #6a11cb)", // gradient spin
          borderRadius: "50%",
          animation: "spin 1.2s linear infinite",
          "@keyframes spin": {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
          boxShadow: "0px 0px 15px rgba(37, 117, 252, 0.4)", // glowing effect
        }}
      />
    </Box>
  );
}

export default Loader;
