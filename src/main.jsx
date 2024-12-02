import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./4-Optimizing_React/01-Complex_state_with_useReducer/05-Undo_redo/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container">
      <App />
    </div>
  </StrictMode>
);
