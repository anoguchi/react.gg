import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./3-Escaping_React/07-Teleportation_with_context/04-Tabs/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
