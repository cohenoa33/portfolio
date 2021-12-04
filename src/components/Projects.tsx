import { projects } from "../data";
import { YouTube } from "./";

export function Projects() {
  return (
    <section id="projects">
      <h2>PROJECTS</h2>
      {projects.map((project) => (
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

          <YouTube videoId={project.demo} />

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
