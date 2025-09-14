import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Submit", path: "/submit" },
    { label: "Admin", path: "/admin" },
  ];

  return (
    <>
      <AppBar
        position="static"
        elevation={3}
        sx={{
          background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
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
                transform: "scale(1.02)",
                color: "#ffe082", // gold hover stays
              },
            }}
          >
            Testimonial System
          </Typography>

          {/* Desktop Nav Links */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                aria-label={item.label}
                sx={{
                  color: theme.palette.common.white,
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
                    backgroundColor: theme.palette.common.white,
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

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: theme.palette.common.white }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            background: `linear-gradient(180deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
            color: theme.palette.common.white,
          },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.path}
              component={Link}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              sx={{
                textAlign: "center",
                "&:hover": {
                  color: "#ffe082",
                  backgroundColor: "rgba(255,255,255,0.05)",
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
