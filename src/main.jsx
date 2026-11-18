import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PracticeProvider } from "./context/PracticeContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PracticeProvider>
      <App />
    </PracticeProvider>
  </React.StrictMode>,
);
