import React from "react";
import Social from "./Social";

const Contact = ({ section }) => {
  let contact = (
    <div className="contact">
      <h2>Contact Details</h2>
      <p>
        <span>Noa Rabin - Cohen</span>
        <br />
        <span>Kirkland, Washington 98033</span>
        <br />
        <span>
          {" "}
          <a href="mailto: cohenoa33@gmail.com">Cohenoa33@gmail.com</a>
        </span>
        <br />
        <Social className="social-link" size="lg" color="#7a8fbc" />
      </p>
    </div>
  );

  const render = (section) => {
    if (section === undefined) return contact;
    return <section id={section}>{contact}</section>;
  };
  return render(section);
};

export default Contact;
