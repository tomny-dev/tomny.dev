import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@tomny-dev/uzi";
import "@tomny-dev/uzi/styles.css";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" defaultAccent="blue">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
