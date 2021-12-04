import { titleize } from "../helpers";
import { work, education } from "../data";

export function Resume() {
  return (
    <>
      <section id="resume">
        <h2>Resume</h2>
        <div className="download">
          <a
            className="download"
            href={`/Noa-Rabin-Cohen-Resume.pdf`}
            rel="noreferrer"
            target="_self"
            download
          >
            {" "}
            Download PDF
            <i className="fa fa-download"> </i>
          </a>
          <br />
        </div>
        <div className="resume">
          <h3>EDUCATION</h3>
          {education.map((school) => (
            <div className="roles-experience" key={school.school}>
              <span>{school.school}</span>
              <p className="role-experience-title">
                {school.degree} • {school.graduated} • {school.location}
              </p>
              <p className="roles-experience-about">{school.description}</p>
              <br />
            </div>
          ))}
          <h3>PROFESSIONAL EXPERIENCE</h3>
          {work.map((work) => (
            <div className="roles-experience" key={work.title}>
              <span>{work.title}</span>
              <p className="role-experience-title">
                {work.company} • {work.location} • {work.years}
              </p>
              <p className="roles-experience-about">{work.about}</p>
              {work.job_description?.map((role, index) => {
                return role?.title ? (
                  <div key={`${role.title}-"role${index}`}>
                    <span className="title">
                      • {titleize(role.title, true)}:
                    </span>{" "}
                    <span className="description">
                      {titleize(role.description)}
                    </span>
                  </div>
                ) : (
                  <div key={`description-"role${index}`}>
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
    </>
  );
}
