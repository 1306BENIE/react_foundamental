import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import App from "./App";
import { Presentation, Projets, Contacts, Home } from "./components"
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    loader: async() => {
      const API_URL = "https://jsonplaceholder.typicode.com/albums";
      const RESPONSE = await fetch(API_URL)
      const DATA = await RESPONSE.json();
      // console.log(DATA);
      return {
        Projet: DATA
      }
      },
    Component: App,
    children: [
      {
        index: true,
        Component: Home
      },
      { path: "/Presentation",
        Component: Presentation },
        
      { path: "/projets", 
        Component: Projets },

      { path: "/contacts", 
        Component: Contacts },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <RouterProvider router={router} />
);
