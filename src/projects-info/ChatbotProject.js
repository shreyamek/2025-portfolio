import React from "react";
import { Box, Typography, Link, List, ListItem, ListItemText, Paper, Divider } from "@mui/material";

function WeatherApp() {
  return (
    <Box
      sx={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "32px",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        border: "1px solid #e0e0e0", // Subtle border for depth
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.08)", // Light, soft shadow
      }}
    >
      {/* Title Section */}
      <Typography
        variant="h3"
        fontWeight="700"
        color="text.primary"
        gutterBottom
        sx={{ textAlign: "center", fontSize: "2.5rem" }}
      >
        Weather App
      </Typography>
      <Divider sx={{ marginBottom: "24px" }} />

      {/* Project Description */}
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: "text.secondary" }}>
        This project is a web application that allows users to check weather forecasts using the{" "}
        <b>OpenWeatherMap API</b>. The app is built using React and Material UI for a clean, modern UI.
      </Typography>

      {/* Features Section */}
      <Typography variant="h5" fontWeight="600" gutterBottom>
        Key Features:
      </Typography>
      <List sx={{ marginLeft: "16px" }}>
        <ListItem sx={{ padding: "4px 0" }}>
          <ListItemText primary="Fetches real-time weather data using OpenWeatherMap API." />
        </ListItem>
        <ListItem sx={{ padding: "4px 0" }}>
          <ListItemText primary="Clean and responsive UI built with Material UI." />
        </ListItem>
        <ListItem sx={{ padding: "4px 0" }}>
          <ListItemText primary="Displays temperature, weather conditions, and more." />
        </ListItem>
      </List>

      {/* GitHub Section */}
      <Paper
        elevation={0} // Removed heavy shadow
        sx={{
          padding: "16px",
          marginTop: "32px",
          backgroundColor: "#f9fafb", // Light gray background
          border: "1px solid #e0e0e0", // Subtle border
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" fontWeight="600" gutterBottom>
          You can find the source code on GitHub:
        </Typography>
        <Link
          href="https://github.com/username/weather-app"
          target="_blank"
          rel="noopener"
          color="primary"
          underline="hover"
          sx={{ fontWeight: "500" }}
        >
          View on GitHub
        </Link>
      </Paper>
    </Box>
  );
}

export default WeatherApp;
