// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AppContextWrapper from "./AppContextWrapper";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextWrapper>
        <App />
      </AppContextWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
