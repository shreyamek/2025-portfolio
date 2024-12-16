import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Header({ scrollToSection }) {
  return (
    <AppBar position="fixed" color="default" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold"/>
        <div>
          <Button color="inherit" onClick={() => scrollToSection("home")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => scrollToSection("about")}>
            About Me
          </Button>
          <Button color="inherit" onClick={() => scrollToSection("experience")}>
            Experience
          </Button>
          <Button color="inherit" onClick={() => scrollToSection("projects")}>
            Projects
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
