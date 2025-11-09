import { about } from "../data";

export function Home() {
  return (
    <section id="about">
      <br />
      <h1>
        NOA <span className="last-name">RABIN COHEN</span>
      </h1>
      <h2>Full-Stack Software Engineer</h2>
      <h2>TypeScript • React • Node.js • PostgreSQL</h2>
      <div className="about">
        <div className="about-text">{about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
    </div>
      </div>
    </section>
  );
}
