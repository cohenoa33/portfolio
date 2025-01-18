import { skills } from "../data";

export function Skills():JSX.Element {
  return (
      <section id="skills">
        <h2>TECHNICAL SKILLS </h2>
        <ul className="skills">
          {skills
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((skill) => (
              <li className="skills-item" key={skill.name}>
                {skill.name}
              </li>
            ))}
        </ul>
      </section>
 
  );
}
