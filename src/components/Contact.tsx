import { ReactElement } from "react";

export function Contact({ section }: Props) {
  let contact: ReactElement = (
    <div className="contact">
      <h2>Let's Connect</h2>
      <div className="contact-details">
        <p className="details">
          Email:{" "}
          <a
            href="mailto:me@noarabincohen.com"
            className="details"
            aria-label="Email Noa Rabin Cohen"
          >
            me@noarabincohen.com
          </a>
        </p>
        <p className="details">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/noa-rabin-cohen/"
            className="details"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit LinkedIn profile"
          >
            linkedin.com/in/noa-rabin-cohen
          </a>
        </p>
        <p className="details">
          GitHub:{" "}
          <a
            href="https://github.com/cohenoa33"
            className="details"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit GitHub profile"
          >
            github.com/cohenoa33
          </a>
        </p>
      </div>
    </div>
  );

  function render(section: string) {
    if (section === undefined) return contact;
    return <section id={section}>{contact}</section>;
  }
  return render(section);
}

interface Props {
  section: string;
}
