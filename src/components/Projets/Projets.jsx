import React from "react";
import { ProjectCard } from "../ProjectCard";
import { useOutletContext } from "react-router-dom";
import "./Projets.css";

const Projets = ({ projectData }) => {
  // On récupère le contexte brut au lieu de faire une déstructuration
  const context = useOutletContext();
  const projets = projectData || context?.Projet || [];

  return (
    <section className="projects">
      <h2>Projets</h2>
      <div className="projects-container">
        {projets.map((project, index) => (
          <ProjectCard key={index} title={project.title} />
        ))}
      </div>
    </section>
  );
};

export default Projets;
