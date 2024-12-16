import React from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

function AboutMe() {
  return (
    <Box
      id="about"
      sx={{
        margin: "48px 0",
        padding: "24px",
        textAlign: "center",
        backgroundColor: "transparent", // Removes the white background
        border: "none", // Removes any border
        boxShadow: "none", // Removes the shadow
        color: "text.primary", // Inherits text color
      }}
    >
      {/* About Me Title */}
      <Typography variant="h4" fontWeight="600" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={2}>
        Hi, I’m Shreya Mekala, a third-year student at the University of Texas at Dallas, 
        majoring in Computer Science. I’ve consistently made the Dean’s List for my academic achievements. 
        I’m passionate about Artificial Intelligence and Machine Learning, and I enjoy building projects 
        that leverage AI to solve real-world problems. I love learning, collaborating, and creating modern, 
        functional applications.
      </Typography>

      {/* Contact Icons */}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        mt={2}
      >
        {/* LinkedIn */}
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/shreyamekala04"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          aria-label="LinkedIn"
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>

        {/* GitHub */}
        <IconButton
          component="a"
          href="https://github.com/shreyamek"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          aria-label="GitHub"
        >
          <GitHubIcon fontSize="large" />
        </IconButton>

        {/* Email */}
        <IconButton
          component="a"
          href="mailto:shreyamekala.edu@gmail.com"
          color="primary"
          aria-label="Email"
        >
          <EmailIcon fontSize="large" />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default AboutMe;
