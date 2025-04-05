import React from "react";

import "./ProjectCard.css";
import { Link } from "react-router";

const ProjectCard = ({ title}) => {
  return (
    <div className="project-card-container">
      <div className="project-card">
        <div className="project-info">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
