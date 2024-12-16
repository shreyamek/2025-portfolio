import { createTheme } from "@mui/material/styles";

const lightTheme = {
  palette: {
    mode: "light",
    primary: { main: "#6E57B6" }, // First muted purple from the palette
    secondary: { main: "#A893D9" }, // Softer secondary purple
    background: { default: "#F5F5F5", paper: "#FFFFFF" },
    text: { primary: "#1A1A1A", secondary: "#4A4A4A" },
  },
};

const darkTheme = {
  palette: {
    mode: "dark",
    primary: { main: "#6E57B6" }, // Consistent accent purple for dark mode
    secondary: { main: "#A893D9" }, // Lighter secondary purple
    background: { default: "#121212", paper: "#1E1E1E" },
    text: { primary: "#FFFFFF", secondary: "#BBBBBB" },
  },
};

export const getTheme = (mode) => createTheme(mode === "dark" ? darkTheme : lightTheme);
