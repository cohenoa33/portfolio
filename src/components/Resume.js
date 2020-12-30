import React from "react";
import resume from "../resume";

const Resume = () => {
  return (
    <div className="resume">
      <section id="resume">
        <div className="experience">
          <h2>TECHNICAL SKILLS </h2>
          <ul>
            {resume.skills.map((skill) => (
              <li key={skill.name}>{skill.name}</li>
            ))}
          </ul>
          <h2>EDUCATION</h2>
          {resume.education.map((school) => (
            <div className="roles-experience" key={school.school}>
              <span>{school.school}</span>
              <p>
                {school.degree} • {school.graduated} • {school.location}
              </p>
              <p className="roles-experience-about">{school.description}</p>
              <br />
            </div>
          ))}
          <br />
          <h2>PROFESSIONAL EXPERIENCE</h2>
          {resume.work.map((work) => (
            <div className="roles-experience" key={work.title}>
              <span>{work.title}</span>
              <p>
                {work.company} • {work.location} • {work.years}
              </p>
              <p className="roles-experience-about">{work.about}</p>

              {work.job_description.map((role) => (
                <>
                  <span className="title">{role.title}:</span>{" "}
                  <span className="description">{role.description}</span>
                </>
              ))}
              <br />
            </div>
          ))}
          <br />

          <a herf="" target="_blank" download>
            Check my resume on PDF{" "}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Resume;
