import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./01-Handling_Events/01-Emoji_copy/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
