import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedium,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Social({ className, size, color }) {
  if (!color) color = "white";
  return (
    <>
      <span>
        <a
          className={className}
          href="https://github.com/cohenoa33"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size={size} color={color} />
        </a>
        {""}
        <a
          className={className}
          href="https://www.linkedin.com/in/noa-rabin-cohen"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size={size} color={color} />
        </a>
        {""}
        <a
          className={className}
          href="https://cohenoa33.medium.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faMedium} size={size} color={color} />
        </a>
      </span>
    </>
  );
}
