import React from "react";
import Social from "./Social";

function Home() {
  return (
    <section id="home">
      <h1>NOA RABIN-COHEN</h1>
      <div className="sub-title">
        Full-Stack Software Engineer.
        <br />
        Experienced in JavaScript, Ruby on Rails, React and Redux.
        <br />
        <Social className="social-link" size="2x" />
      </div>
    </section>
  );
}

export default Home;
