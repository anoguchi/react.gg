import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./02-Preserving_values_with_useState/01-Light_Switch/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
