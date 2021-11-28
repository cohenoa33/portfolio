import { skills } from "../data";

const Skills = () => {
  return (
    <>
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
    </>
  );
};

export default Skills;
