import React from "react";
import information from "../data/information";

const Resume = () => {
  return (
    <>
      <section id="resume">
        <h2>Resume</h2>
        <div className="download">
          <a
            className="download"
            href={process.env.REACT_APP_URL}
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
        <div className="resume">
          <h3>EDUCATION</h3>
          {information.education.map((school) => (
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
          {information.work.map((work) => (
            <div className="roles-experience" key={work.title}>
              <span>{work.title}</span>
              <p className="role-experience-title">
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
        </div>
      </section>
    </>
  );
};

export default Resume;
