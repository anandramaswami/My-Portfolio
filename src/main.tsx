import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// 🔑 Show intro only once per session
if (!sessionStorage.getItem("introSeen")) {
  sessionStorage.setItem("introSeen", "true");

  if (window.location.pathname === "/") {
    window.history.replaceState(null, "", "/intro");
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
