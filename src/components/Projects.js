import React from "react";
import projectsList from "../data/projectsList";

const Projects = () => {
  return (
    <div>
      <div className="section" id="project-section">
        <h2>Projects</h2>
      </div>
      <div>
        <div>
          {projectsList.map(project => (
            <div className="projects" key={project.id}>
              <div className="info">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                {/* <p className="project-description">
                  <span>Role:</span> {project.role}
                </p> */}
                <p className="project-description">
                  <span>Technologies:</span> {project.technologies}
                </p>
                <div className="buttons">
                  <a
                    href={project.projectURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="project-button">View Project</button>
                  </a>
                  <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>GitHub Repo</button>
                  </a>
                </div>
              </div>
              <div className="project-images">
                <img
                  alt={`${project.name} `}
                  src={project.projectImage}
                  className="project-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
