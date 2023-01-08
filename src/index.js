import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext";
import App from "./App";
import { WeatherProvider } from "./context/WeatherContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </ThemeProvider>
);
