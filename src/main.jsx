import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
// Importar Bootstrap y Bootstrap Icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
