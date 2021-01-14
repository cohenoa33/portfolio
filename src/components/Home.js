import React from "react";
import Social from "./Social";
import image from "../images/profilepic.jpg";

function Home() {
  return (
    <section id="home">
      <h1>NOA RABIN-COHEN</h1>
      <h2>SOFTWARE DEVELOPER</h2>
      <div className="about">
        <div className="about-text">
          {" "}
          Full-Stack Software Engineer experienced in JavaScript, Ruby on Rails,
          React and Redux, with a background as a cross-functional project
          manager and operations professional.
          <br></br> A client-oriented producer at heart, a problem solver, and a
          creative thinker. Passionate about learning. Continuously looks for
          ways to learn new languages and frameworks and add value to teams.
          Recognized by colleagues and supervisors for amazing customer service
          and organizational skills.
        </div>

        <img src={image} className="profile-pic" alt="Profile" />
      </div>
    </section>
  );
}

export default Home;
