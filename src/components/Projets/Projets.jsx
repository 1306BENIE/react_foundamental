import React from "react";
import {ProjectCard} from "../ProjectCard";
import "./Projets.css";

const Projects = () => {

  return (
    <section className="projects">
      <h2>Projets</h2>
      <div className="projects-container">
        {Projets?.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
