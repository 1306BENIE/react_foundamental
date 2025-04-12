import React from "react";
import { ProjectCard } from "../ProjectCard";
import "./Projets.css";
import useJSONPLACEHOLDERGETWAY from "../../service/apiJsonPlaceHolder.service";

const Projets = () => {
  const { projet } = useJSONPLACEHOLDERGETWAY();

  return (
    <section className="projects">
      <h2>Projets</h2>
      <div className="projects-container">
        {projet.map((projet, index) => (
          <ProjectCard key={index} title={projet.title} />
        ))}
      </div>
    </section>
  );
};

export default Projets;
