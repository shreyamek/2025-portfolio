import React from "react";
import { Box, Button } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function ThemeToggle({ toggleTheme, mode }) {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
      }}
    >
      <Button
        variant="contained"
        color="primary"
        startIcon={mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        onClick={toggleTheme}
        sx={{
          borderRadius: "50px",
          textTransform: "none",
        }}
      >
        {mode === "dark" ? "Light Mode" : "Dark Mode"}
      </Button>
    </Box>
  );
}

export default ThemeToggle;
