import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ProjectCard from "./ProjectCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { projectData } from "../projectData";


function Projects() {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <Box id="projects" sx={{ margin: "48px 0", textAlign: "center" }}>
      {/* Heading */}
      <Typography variant="h4" fontWeight="600" gutterBottom>
        My Projects
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Click on the icons to view GitHub and/or DevPost links!
      </Typography>

      {/* Project Cards in a Grid */}
      <Grid container spacing={4} justifyContent="center">
        {projectData.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              devpostLink={project.devpostLink}
              onReadMore={() => navigate(`/projects/${project.id}`)} // Corrected navigate usage
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
