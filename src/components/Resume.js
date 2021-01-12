import React from "react";
import information from "../information";

const Resume = () => {
  return (
    <>
      <section id="resume">
        <div className="experience">
          <h2>TECHNICAL SKILLS </h2>
          <ul className="skills">
            {information.skills.map((skill) => (
              <li className="skills-item" key={skill.name}>
                • {skill.name}
              </li>
            ))}
          </ul>
          <h2>EDUCATION</h2>
          {information.education.map((school) => (
            <div className="roles-experience" key={school.school}>
              <span>{school.school}</span>
              <p>
                {school.degree} • {school.graduated} • {school.location}
              </p>
              <p className="roles-experience-about">{school.description}</p>
              <br />
            </div>
          ))}
          <h2>PROFESSIONAL EXPERIENCE</h2>
          {information.work.map((work) => (
            <div className="roles-experience" key={work.title}>
              <span>{work.title}</span>
              <p>
                {work.company} • {work.location} • {work.years}
              </p>
              <p className="roles-experience-about">{work.about}</p>

              {work.job_description.map((role, index) => (
                <div key={role.title}>
                  <span className="title">• {role.title}:</span>{" "}
                  <span className="description">{role.description}</span>
                </div>
              ))}
              <br />
            </div>
          ))}
          <br />
          <div className="download">
            <a
              className="download"
              href="https://1drv.ms/b/s!AqSCQUSQABe5kVNPSNQmN67Uy8A5"
              rel="noreferrer"
              target="_blank"
              download
            >
              {" "}
              Download PDF
              <i className="fa fa-download"> </i>
            </a>
            <br />
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
