import React from "react";
import "./Projects.css";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import project1 from "../../../img/project1.png";
import project2 from "../../../img/project2.png";
import project3 from "../../../img/project3.png";
import ProjectsCard from "../ProjectsCard/ProjectsCard";

const projectsData = [
  {
    id: 1,
    img: project1,
    title: "Villa on Washington Avenue",
    location: "Dhaka, Bangladesh",
    icon: faMapMarkerAlt,
  },
  {
    id: 2,
    img: project2,
    title: "Luxury villa in Rego Park",
    location: "Dhaka, Bangladesh",
    icon: faMapMarkerAlt,
  },
  {
    id: 3,
    img: project3,
    title: "Gorgeous house",
    location: "Dhaka, Bangladesh",
    icon: faMapMarkerAlt,
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <div className="container px-lg-0">
        <div className="row">
          <div className="projects-top text-center">
            <h5>Projects</h5>
            <h2>
              Discover the latest Interior Design{" "}
              <span className="d-block">available today</span>
            </h2>
          </div>
          {projectsData.map((project) => (
            <ProjectsCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
