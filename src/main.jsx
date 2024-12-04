import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./6-Rebuilding_useHooks/35-useCountdown/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container">
      <App />
    </div>
  </StrictMode>
);
