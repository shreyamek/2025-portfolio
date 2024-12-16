// src/components/BlogPostTemplate.js
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { projectData } from "../projectData";

function BlogPostTemplate() {
  const { id } = useParams(); // Get the project id from URL
  const navigate = useNavigate(); // For navigation
  const project = projectData.find((proj) => proj.id === id); // Find the project by id

  // If project is not found, show an error message
  if (!project) {
    return (
      <Box sx={{ textAlign: "center", marginTop: "48px" }}>
        <Typography variant="h4" color="error">
          Project not found!
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "24px",
        textAlign: "center", // Center all text content
      }}
    >
      {/* Back Arrow */}
      <Box sx={{ display: "flex", justifyContent: "flex-start", marginBottom: "16px" }}>
        <IconButton onClick={() => navigate(-1)} aria-label="Back">
          <ArrowBackIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* Project Title */}
      <Typography variant="h3" fontWeight="600" gutterBottom>
        {project.title}
      </Typography>

      {/* Project Description */}
      <Typography variant="body1" paragraph>
        {project.detailedDescription}
      </Typography>

      {/* Technologies Used */}
      <Typography variant="h5" fontWeight="600" mt={4} mb={2}>
        Technologies Used
      </Typography>
      <Box
        component="ul"
        sx={{
          listStyle: "none",
          padding: 0,
          margin: "0 auto", // Center the container
          display: "flex",
          justifyContent: "center", // Center content horizontally
          flexWrap: "wrap",
          gap: "8px",
          maxWidth: "100%", // Prevent overflow
        }}
      >
        {project.technologies.map((tech, index) => (
          <Box
            component="li"
            key={index}
            sx={{
              backgroundColor: "#EDE7F6", // Light purple
              color: "#6A1B9A", // Purple text color
              padding: "6px 12px",
              borderRadius: "16px",
              fontSize: "0.9rem",
            }}
          >
            {tech}
          </Box>
        ))}
      </Box>

      {/* Achievements */}
      {project.achievements && (
        <>
          <Typography variant="h5" fontWeight="600" mt={4} mb={2}>
            Achievements
          </Typography>
          <Box
            component="ul"
            sx={{
              listStyle: "none",
              padding: 0,
              margin: "0 auto", // Center the container
              display: "flex",
              justifyContent: "center", // Center content horizontally
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {project.achievements.map((achieve, index) => (
              <Box
                component="li"
                key={index}
                sx={{
                  fontSize: "1rem",
                }}
              >
                <Typography variant="body1">{achieve}</Typography>
              </Box>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
}

export default BlogPostTemplate;
