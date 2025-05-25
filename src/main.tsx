import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

if (process.env.NODE_ENV === "development") {
  // const { worker } = require("./mocks/browser");
  const { worker } = await import("./mocks/browser");
  worker.start();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
