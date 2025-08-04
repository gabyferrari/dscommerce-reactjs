import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import React from "react";

window.React= React

createRoot(document.getElementById('root')!).render(
  <App />
)
