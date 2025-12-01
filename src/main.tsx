import { initThemeMode } from "flowbite-react";
import { StrictMode } from "react";
import { ThemeInit } from "../.flowbite-react/init";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import { Home } from "./components/pages/Home";
import App from "./App";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route path="" element={<Home />} />
  </Route>
));

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <StrictMode>
    <ThemeInit />
    <RouterProvider router={router} />
  </StrictMode>,
);

initThemeMode();
