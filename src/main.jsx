import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./4-Optimizing_React/03-Managing_advanced_effects/02-React_ruler/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container">
      <App />
    </div>
  </StrictMode>
);
