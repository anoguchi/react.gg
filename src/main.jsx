import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./6-Rebuilding_useHooks/26-useWindowScroll/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container">
      <App />
    </div>
  </StrictMode>
);
