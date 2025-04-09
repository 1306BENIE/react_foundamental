import React from "react";
import { ProjectCard } from "../ProjectCard";


import "./Projets.css";

const Projets = ({ projectData }) => {
  // On récupère le contexte brut au lieu de faire une déstructuration
  

  return (
    <section className="projects">
      <h2>Projets</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <ProjectCard key={index} title={project.title} />
        ))}
      </div>
    </section>
  );
};

export default Projets;
