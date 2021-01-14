import React from "react";
import information from "../information";

const Skills = () => {
  return (
    <>
      <section id="skills">
        <h2>TECHNICAL SKILLS </h2>
        <ul className="skills">
          {information.skills.map((skill) => (
            <li className="skills-item" key={skill.name}>
              {skill.name}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Skills;
