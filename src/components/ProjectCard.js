import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

function ProjectCard({ title, description, githubLink, devpostLink, onReadMore }) {
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        boxShadow: 2,
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
      }}
    >
      {/* Title */}
      <Typography variant="h6" fontWeight="600" color="text.primary">
        {title}
      </Typography>

      {/* Description */}
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ marginTop: "8px", marginBottom: "16px" }}
      >
        {description}
      </Typography>

      {/* External Links */}
      <Box>
        {githubLink && (
          <IconButton component="a" href={githubLink} target="_blank" rel="noopener noreferrer">
            <GitHubIcon sx={{ color: "#6E57B6" }} />
          </IconButton>
        )}
        {devpostLink && (
          <IconButton component="a" href={devpostLink} target="_blank" rel="noopener noreferrer">
            <LaunchIcon sx={{ color: "#6E57B6" }} />
          </IconButton>
        )}
      </Box>

      {/* Read More Button */}
      <Box mt={2}>
        <button
          onClick={onReadMore}
          style={{
            backgroundColor: "#6E57B6",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "8px 12px",
            cursor: "pointer",
          }}
        >
          Read More
        </button>
      </Box>
    </Box>
  );
}

export default ProjectCard;
