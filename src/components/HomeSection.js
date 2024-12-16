import React from "react";
import { TypeAnimation } from "react-type-animation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function HomeSection() {
  return (
    <Box
      id="home"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens
        alignItems: "center",
        justifyContent: "center",
        margin: "72px 0",
        padding: "0 24px",
        textAlign: { xs: "center", md: "left" },
      }}
    >
      {/* Text Content */}
      <Box sx={{ flex: 1, paddingRight: { md: "24px" } }}>
        {/* Typing Effect for the Main Heading */}
        <TypeAnimation
          sequence={[
            "Welcome to My Portfolio :)", // The text to type
            1000, // Wait 1 second
          ]}
          wrapper="h3"
          cursor={false}
          repeat={0}
          style={{
            fontWeight: "600",
            fontSize: "2rem",
            marginBottom: "16px",
          }}
        />
        <Typography variant="body1" color="text.secondary">
          Hi, I'm Shreya Mekala, a third-year student at UTD
          with a strong passion for AI/ML and full-stack development. Explore my work below!
        </Typography>
      </Box>

      {/* Placeholder Image */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: { xs: "24px", md: "0" },
        }}
      >
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQHtsdVBpVm-FQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729782528975?e=2147483647&v=beta&t=YBe4XQwIoYdY4xQiQq8eBMj--IPnpB0JqDKBACgfe0o"
          alt="Shreya Mekala"
          style={{
            borderRadius: "50%",
            width: "100%",
            maxWidth: "300px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </Box>
    </Box>
  );
}

export default HomeSection;
