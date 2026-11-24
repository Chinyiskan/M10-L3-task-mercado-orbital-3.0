import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// TODO 1.1 · Importa BrowserRouter desde "react-router"
import App from "./App.jsx";
import "./App.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* TODO 1.1 · Envuelve <App /> con <BrowserRouter> */}
        <App />
    </StrictMode>
);
