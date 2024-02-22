import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#0f0f0f", // Darker shade for cinematic feel
    800: "#1b1b1b",
    700: "#272727",
  },
  primary: {
    500: "#e53e3e", // A strong color for buttons or highlights
  },
  secondary: {
    500: "#3182ce", // Another color for variety in buttons or links
  },
};

const theme = extendTheme({ colors });

const BASE_URL = "http://85.928.727.2"; // Add base URL variable

// Add React.StrictMode and ChakraProvider components with the theme
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
