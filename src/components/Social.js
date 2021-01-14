import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedium,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  const size = "2x";
  const color = "#f2f2f2";
  return (
    <>
      <ul id="social-menu">
        <li className="social-menu">
          <a
            href="https://github.com/cohenoa33"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size={size} color={color} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/noa-rabin-cohen"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size={size} color={color} />
          </a>
          <li></li>
          <a
            href="https://cohenoa33.medium.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faMedium} size={size} color={color} />
          </a>
        </li>
      </ul>
    </>
  );
}
