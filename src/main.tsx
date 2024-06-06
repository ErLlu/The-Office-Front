import React from "react";
import ReactDOM from "react-dom/client";
import "./characters/styles/index.scss";
import App from "./characters/components/App/App.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
