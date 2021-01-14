import React from "react";
import information from "../information";

export default function Projects() {
  return (
    <div>
      <section id="projects">
        <h2>PROJECTS</h2>
        {information.projects.map((project) => (
          <div key={project.name} className="project-div">
            <h3 className="title">{project.name}</h3>
            <div className="video">
              <iframe
                title={project.demo}
                src={`https://www.youtube.com/embed/${project.demo}`}
                frameBorder="0"
              />
            </div>
            <div className="github-heroku">
              <a
                target="_blank"
                className="github"
                href={project.github}
                rel="noreferrer"
              >
                GitHub
              </a>
              <br />

              {project.heroku ? (
                <a
                  target="_blank"
                  className="heroku"
                  href={project.heroku}
                  rel="noreferrer"
                >
                  Live App
                </a>
              ) : null}
              {project.surge ? (
                <a
                  target="_blank"
                  className="heroku"
                  href={project.surge}
                  rel="noreferrer"
                >
                  Live App
                </a>
              ) : null}
            </div>
            <ul className="project-description">
              {project.description.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
