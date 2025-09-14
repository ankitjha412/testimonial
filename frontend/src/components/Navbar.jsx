import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={3}
      sx={{
        background: "linear-gradient(90deg, #6a11cb, #2575fc)", // gradient purple → blue
        animation: "fadeDown 0.6s ease-in-out",
        "@keyframes fadeDown": {
          from: { opacity: 0, transform: "translateY(-20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      <Toolbar>
        {/* Brand / Logo */}
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            letterSpacing: 1,
            cursor: "pointer",
            textShadow: "0px 2px 4px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              color: "#ffe082", // soft gold hover
            },
          }}
        >
          Testimonial System
        </Typography>

        {/* Nav Links */}
        <Box>
          {[
            { label: "Home", path: "/" },
            { label: "Submit", path: "/submit" },
            { label: "Admin", path: "/admin" },
          ].map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              sx={{
                color: "white",
                fontWeight: 500,
                position: "relative",
                mx: 1,
                textTransform: "none",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "0%",
                  height: "2px",
                  left: 0,
                  bottom: -3,
                  backgroundColor: "#fff",
                  transition: "width 0.3s",
                },
                "&:hover::after": {
                  width: "100%",
                },
                "&:hover": {
                  color: "#ffe082", // gold hover
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
