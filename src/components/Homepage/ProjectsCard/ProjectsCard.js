import React from "react";
import "./ProjectsCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectsCard = ({ project }) => {
  const { img, title, location, icon } = project;
  return (
    <div className="col-lg-4">
      <div className="project-img">
        <img className="img-fluid" src={img} alt="" />
      </div>
      <div className="projects-text text-center">
        <h3>{title}</h3>
        <p>
          <FontAwesomeIcon icon={icon} />{" "}
          <span className="ms-1">{location}</span>
        </p>
      </div>
    </div>
  );
};

export default ProjectsCard;
