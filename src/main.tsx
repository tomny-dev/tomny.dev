// src/main.tsx - @tomny-dev/uzi v0.2.2
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@tomny-dev/uzi";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" defaultAccent="blue">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
