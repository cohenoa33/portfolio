import { skills } from "../data";
import { ReactElement } from "react";

export function Skills(): ReactElement {
  return (
    <section id="skills">
      <h2>TECHNICAL SKILLS </h2>
      <ul className="skills">
        {skills.map((skill) => (
          <li className="skills-item" key={skill.name}>
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
