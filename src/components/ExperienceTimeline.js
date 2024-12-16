import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";

const experiences = [
  {
    title: "Full-Stack Software Engineer Intern",
    company: "USAA",
    year: "2024",
    description:
      "Worked on developing scalable full-stack applications using React, Node.js, and AWS services.",
    readMore: true,
  },
  {
    title: "Web Development Intern",
    company: "Brightworks Group LLC",
    year: "2023",
    description:
      "Contributed to building responsive web interfaces using React and Material UI.",
    readMore: true,
  },
  {
    title: "IT Intern",
    company: "Galaxy IT LLC",
    year: "2023",
    description:
      "Assisted in managing IT infrastructure and providing technical support to clients.",
    readMore: false,
  },
  {
    title: "Website Developer",
    company: "School Simplified",
    year: "2022",
    description:
      "Worked on their front-end website using React.js and TypeScript to create an interactive user interface for over 60,000 organization members.",
    readMore: false,
  },
];

function ExperienceTimeline() {
  return (
    <Box
      id="experience"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        margin: "48px 0", // Add spacing
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        fontWeight="600"
        gutterBottom
        sx={{
          textAlign: "center",
          marginBottom: "48px", // Increased spacing below title
          zIndex: 2, // Ensure it's above the line
          position: "relative",
        }}
      >
        Work Experience
      </Typography>

      {/* Vertical Line */}
      <Box
        sx={{
          position: "absolute",
          top: "80px", // Start below the title
          width: "2px",
          height: "calc(100% - 80px)", // Adjust line height
          backgroundColor: "#6E57B6",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 0,
        }}
      ></Box>

      {/* Timeline Items */}
      {experiences.map((experience, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
            width: "100%",
            padding: "24px 0",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Icon */}
          <Box
            sx={{
              width: "50px",
              height: "50px",
              backgroundColor: "#6E57B6",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <WorkIcon sx={{ color: "white" }} />
          </Box>

          {/* Experience Card */}
          <Box
            sx={{
              backgroundColor: "background.paper",
              padding: "16px",
              borderRadius: "8px",
              boxShadow: 2,
              width: "40%",
              margin: index % 2 === 0 ? "0 0 0 auto" : "0 auto 0 0",
            }}
          >
            <Typography variant="h6" fontWeight="600" color="primary">
              {experience.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {experience.company}
            </Typography>
            <Typography
              variant="caption"
              display="block"
              color="text.secondary"
            >
              {experience.year}
            </Typography>
            <Typography variant="body2" mt={1}>
              {experience.description}
            </Typography>
            {experience.readMore && (
              <Box mt={1}>
                <button
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
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default ExperienceTimeline;
