import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./reset.css";
import App from "./App.tsx";
import ThemeProviderWrapper from "./provider/ThemeProvider.tsx";
import QueryClientProviderWrapper from "./provider/QueryClientProvider.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProviderWrapper>
      <BrowserRouter>
        <ThemeProviderWrapper>
          <App />
        </ThemeProviderWrapper>
      </BrowserRouter>
    </QueryClientProviderWrapper>
  </StrictMode>
);
