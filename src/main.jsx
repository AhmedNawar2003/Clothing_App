import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "@splidejs/splide/dist/js/splide.min.js";
import App from "./App.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
      <App />
  </StrictMode>
);
