import React from "react";
import information from "../data/information";

export default function Projects() {
  return (
    <section id="projects">
      <h2>PROJECTS</h2>
      {information.projects.map((project) => (
        <div key={project.name} className="project-div">
          <h3 className="title">{project.name}</h3>
          <div className="github-live">
            <a
              target="_blank"
              className="github"
              href={project.github}
              rel="noreferrer"
            >
              GitHub
              {/* <FontAwesomeIcon icon={faGithub} size="1x" /> */}
            </a>{" "}
            <br />
            {project.live ? (
              <a
                target="_blank"
                className="live"
                href={project.live}
                rel="noreferrer"
              >
                Live Demo App
              </a>
            ) : null}
          </div>
          <div className="video">
            <iframe
              title={project.demo}
              src={`https://www.youtube.com/embed/${project.demo}`}
              frameBorder="0"
            />
          </div>

          <ul className="project-description">
            {project.description.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
