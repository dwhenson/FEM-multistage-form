import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./abstracts.css";
import "./global.css";
import "./composition.css";
import App from "./components/App/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
