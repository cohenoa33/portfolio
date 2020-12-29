import React from "react";
import Social from "./Social";
import About from "./About";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <section id="home">
      <h1>NOA RABIN-COHEN</h1>
      <p>
        Full-Stack Software Engineer.
        <br />
        Experienced in JavaScript, Ruby on Rails, React and Redux.
      </p>

      <Social className="social-link" size="2x" />
    </section>
  );
}

export default Home;
