import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./03-Using_useState/04-Multistep_Form/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
