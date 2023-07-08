import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./reset.css";
import "./abstracts.css";
import "./global.css";
import "./composition.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
