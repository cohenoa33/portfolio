import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export function Social() {
  const size = "2x";
  const color = "#f2f2f2";
  return (
    <div>
      <ul id="social-menu">
          <li className="social-menu">
        <a href="https://github.com/cohenoa33" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size={size} color={color} />
        </a>
          </li>
          <li className="social-menu">
        <a
          href="https://www.linkedin.com/in/noa-rabin-cohen"
          target="_blank"
          rel="noreferrer"
        >
            <FontAwesomeIcon icon={faLinkedin} size={size} color={color} />
        </a>
          </li>
    
      </ul>
    </div>
  );
}
