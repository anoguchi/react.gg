import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./4-Optimizing_React/02-Referential_equality_and_why_it_matters/02-Localized_primes/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container">
      <App />
    </div>
  </StrictMode>
);
