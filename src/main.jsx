import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./06-Preserving_values_with_useRef/01-Stop_watch/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
