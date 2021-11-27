import React from "react";

const Contact = ({ section }: Props) => {
  let contact: JSX.Element = (
    <div className="contact">
      <h2>Contact Me</h2>
      <div className="contact-details">
        <span className="details">Noa Rabin-Cohen</span>
        <br />
        <span className="details">Kirkland, Washington 98033</span>
        <br />
        <span>
          {" "}
          <a href="mailto: me@noarabincohen.com" className="details">
            Me@noarabincohen.com
          </a>
        </span>
        <br />
      </div>
    </div>
  );

  const render = (section: string) => {
    if (section === undefined) return contact;
    return <section id={section}>{contact}</section>;
  };
  return render(section);
};

interface Props {
  section: string;
}
export default Contact;