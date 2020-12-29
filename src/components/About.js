import React from "react";
import image from "../images/profilepic.jpg";
import Social from "./Social";

const About = () => {
  return (
    <section id="about">
      {/* <img className="profile-pic" src={image} alt="Noa Profile Pic" /> */}

      <h2>About</h2>

      <p>
        {" "}
        Full-Stack Software Engineer experienced in JavaScript, Ruby on Rails,
        React and Redux, with a background as a cross-functional project manager
        and operations professional. A client-oriented producer at heart, a
        problem solver, and a creative thinker. Passionate about learning.
        Continuously looks for ways to learn new languages and frameworks and
        add value to teams. Recognized by colleagues and supervisors for amazing
        customer service and organizational skills.
      </p>
      <div>
        <h2>Contact Details</h2>
        <p>
          <span>Noa Rabin-Cohen</span>
          <br />
          <span>Kirkland, Washington 98033</span>
          <br />
          <span>
            {" "}
            <a href="mailto: cohenoa33@gmail.com">Cohenoa33@gmail.com</a>
          </span>
          <br />
          <a href="#home">Home</a>
          <br />
          <Social className="social-link" size="lg" color="gold" />
        </p>
      </div>
    </section>
  );
};

export default About;
