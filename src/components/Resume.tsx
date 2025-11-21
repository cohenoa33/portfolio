import { titleize } from "../helpers";
import { work, education, workProjects } from "../data";

export function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <div className="download">
        <a
          className="download"
          href="/Noa_Rabin_Cohen_Full-Stack_Software_Engineer_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          download
        >
          Download PDF
        </a>
        <br />
      </div>
      <div className="resume">
        <h3>EDUCATION</h3>
        {education.map((school) => (
          <div className="roles-experience" key={school.school}>
            <span>{school.school}</span>
            <p className="role-experience-title">
              {school.degree} • {school.location}
            </p>
          </div>
        ))}
        <h3>PROFESSIONAL EXPERIENCE</h3>
        {work.map((work) => (
          <div className="roles-experience" key={work.title}>
            <span>{work.title}</span>
            <p className="role-experience-title">
              {work.company} • {work.location} • {work.years}
            </p>

            {work.jobDescription?.map((role) => {
              return role?.title ? (
                <div key={`${role.title}-"role${role.id}`}>
                  <span className="title">• {titleize(role.title, true)}:</span>{" "}
                  <span className="description">
                    {titleize(role.description)}
                  </span>
                </div>
              ) : (
                <div key={`description-role-${role.id}`}>
                  <span className="description">
                    • {titleize(role.description)}
                  </span>
                </div>
              );
            })}
            <br />
          </div>
        ))}
        <h3>TECHNICAL PROJECTS </h3>
        {workProjects.map((work) => (
          <div className="roles-experience" key={work.title}>
            <span>{work.title}</span>
            <p className="role-experience-title">
              {work.company} 
            </p>

            {work.jobDescription?.map((role) => {
              return role?.title ? (
                <div key={`${role.title}-"role${role.id}`}>
                  <span className="title">• {titleize(role.title, true)}:</span>{" "}
                  <span className="description">
                    {titleize(role.description)}
                  </span>
                </div>
              ) : (
                <div key={`description-role-${role.id}`}>
                  <span className="description">
                    • {titleize(role.description)}
                  </span>
                </div>
              );
            })}
            <br />
          </div>
        ))}
        <br />
      </div>
    </section>
  );
}
