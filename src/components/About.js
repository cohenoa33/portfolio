import React from "react";
import image from "../images/profilepic.jpg";
import Contact from "./Contact";

const About = () => {
  return (
    <div className="about">
      <section id="about">
        <div className="about-text">
          <h2>About</h2>
          <p>
            {" "}
            Full-Stack Software Engineer experienced in JavaScript, Ruby on
            Rails, React and Redux, with a background as a cross-functional
            project manager and operations professional. A client-oriented
            producer at heart, a problem solver, and a creative thinker.
            Passionate about learning. Continuously looks for ways to learn new
            languages and frameworks and add value to teams. Recognized by
            colleagues and supervisors for amazing customer service and
            organizational skills.
          </p>
        </div>
        <div className="profile">
          <img className="profile-pic" src={image} alt="Noa Profile Pic" />
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default About;
