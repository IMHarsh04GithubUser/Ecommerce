import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { EProvider } from "./components/contextProvider/Contextprovider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EProvider>
      <App />
    </EProvider>
  </StrictMode>
);
