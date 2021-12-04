import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedium,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export function Social() {
  const size = "2x";
  const color = "#f2f2f2";
  return (
    <div>
      <ul id="social-menu">
        <a href="https://github.com/cohenoa33" target="_blank" rel="noreferrer">
          <li className="social-menu">
            <FontAwesomeIcon icon={faGithub} size={size} color={color} />
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/noa-rabin-cohen"
          target="_blank"
          rel="noreferrer"
        >
          <li className="social-menu">
            <FontAwesomeIcon icon={faLinkedin} size={size} color={color} />
          </li>
        </a>
        <a
          href="https://cohenoa33.medium.com/"
          target="_blank"
          rel="noreferrer"
        >
          <li className="social-menu">
            <FontAwesomeIcon icon={faMedium} size={size} color={color} />
          </li>
        </a>
      </ul>
    </div>
  );
}
