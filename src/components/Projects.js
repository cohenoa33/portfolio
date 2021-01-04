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
                  Heroku
                </a>
              ) : null}
            </div>

            {project.description.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}

// name: "Favfest",
// github: "https://github.com/cohenoa33/favfest",
// demo: "https://youtu.be/VXQRUEcJHs0",
// description: [
//   "Built Rails Application provides users with information about music festivals, allowing an interactive diary.",
//   "Utilized MVC structure and RESTful conventions, HTML Forms, ActiveRecord Models, and Relationship using Postgres Database. Added custom validations to increase security.",
//   "Embedded seeded YouTube links that rendered fully interactive videos on rendered pages.",
// ],
