import React from "react";
import Social from "./Social";

const Contact = ({ section }) => {
  let contact = (
    <div className="contact">
      <h2>Contact Details</h2>
      <div className="contact-details">
        <span>Noa Rabin - Cohen</span>
        <br />
        <span>Kirkland, Washington 98033</span>
        <br />
        <span>
          {" "}
          <a href="mailto: me@noarabincohen.com">me@noarabincohen.com</a>
        </span>
        <br />
        <p className="contact-social">
          <Social className="social-link" size="lg" color="#2b2b2b" />
        </p>
      </div>
    </div>
  );

  const render = (section) => {
    if (section === undefined) return contact;
    return <section id={section}>{contact}</section>;
  };
  return render(section);
};

export default Contact;
