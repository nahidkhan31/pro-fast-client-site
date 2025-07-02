import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import Router from "./routes/Router";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </StrictMode>
);
