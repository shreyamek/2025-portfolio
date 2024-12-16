import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getTheme } from "./theme"; // Your theme file
import Header from "./components/Header";
import Projects from "./components/Projects";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ThemeToggle from "./components/ThemeToggle";
import AboutMe from "./components/AboutMe";
import HomeSection from "./components/HomeSection";
import SectionDivider from "./components/SectionDivider";
import ProjectDetail from "./components/ProjectDetail";
import { motion } from "framer-motion";

function App() {
  const [mode, setMode] = useState("light");
  const [headerHeight, setHeaderHeight] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = getTheme(mode);

  // Measure the header height dynamically
  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  }, []);

  // Update mouse position for aura effect
  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  // Smooth scroll with dynamic header offset
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/2025-portfolio">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            minHeight: "100vh",
            backgroundColor: "background.default",
            position: "relative",
            overflow: "hidden",
          }}
          onMouseMove={handleMouseMove}
        >
          {/* Mouse Aura */}
          <div
            style={{
              position: "fixed",
              top: mousePos.y - 100,
              left: mousePos.x - 100,
              width: "25%",
              height: "25%",
              background:
                "radial-gradient(circle, rgba(210,145,188,0.4), transparent)",
              borderRadius: "50%",
              pointerEvents: "none",
              filter: "blur(50px)",
              transform: "translate(-50%, -50%)",
            }}
          ></div>

          {/* Header */}
          <Header scrollToSection={scrollToSection} />

          {/* Routes */}
          <Routes>
            <Route
              path="/"
              element={
                <Box sx={{ maxWidth: "1200px", width: "100%", padding: "100px" }}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                  >
                    <HomeSection />
                  </motion.div>
                  <SectionDivider/>

                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <AboutMe />
                  </motion.div>
                  <SectionDivider/>

                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <ExperienceTimeline />
                  </motion.div>
                  <SectionDivider/>

                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <Projects />
                  </motion.div>
                </Box>
              }
            />
            {/* Dynamic Project Pages */}
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>

          {/* Footer */}
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              padding: "16px",
              borderTop: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              © 2025 Shreya Mekala. All rights reserved.
            </Typography>
          </Box>

          {/* Theme Toggle */}
          <ThemeToggle toggleTheme={toggleTheme} mode={mode} />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
