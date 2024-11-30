import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./05-Managing_effects_pt2/03-Country_info/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
