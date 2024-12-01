import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./3-Escaping_React/06-Preserving_values_with_useRef/03-Autofocus/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
