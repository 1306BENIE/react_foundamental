import React from "react";
import { Header } from "./components";
import { Outlet} from "react-router-dom";
import "./App.css";

const NavItems = [
  { title: "Presentation", link: "/Presentation" },
  { title: "Projets", link: "/projets" },
  { title: "Contacts", link: "/contacts" }
];

const App = () => {
  return (
    <>
      <section className="navbar">
        <Header NavItems={NavItems} />
      </section>
      <main>
        <Outlet/>
      </main>
    </>
  );
};

export default App;