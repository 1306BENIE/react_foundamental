import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Presentation, Projets, Contacts, Home } from "./components";
import {ErrorBoundary} from "./components";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorBoundary />, // facultatif
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/presentation",
        Component: Presentation
      },
      {
        path: "/projets",
        Component: Projets
      },
      {
        path: "/contacts",
        Component: Contacts
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
