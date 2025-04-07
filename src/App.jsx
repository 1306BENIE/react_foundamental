import React from "react";
import { Header } from "./components";
import { Outlet, useLoaderData } from "react-router-dom";
import "./App.css";

const NavItems = [
  { title: "Presentation", link: "/Presentation" },
  { title: "Projets", link: "/projets" },
  { title: "Contacts", link: "/contacts" }
];

const App = () => {
  const { Projet } = useLoaderData();
  return (
    <>
      <section className="navbar">
        <Header NavItems={NavItems} />
      </section>
      <main>
        <Outlet context={{ Projet }}/>
      </main>
    </>
  );
};

export default App;