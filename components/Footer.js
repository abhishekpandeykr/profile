import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialLinks } from "../socialLinks";

export const Footer = () => {
  return (
    <footer id="footer">
      <h2>Abhishek Kumar Pandey</h2>
      <ul>
        <li>
          <a href={SocialLinks.linkedin} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href={SocialLinks.github} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="mailto:pkabhishek@outlook.com">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="sr-only">Email</span>
          </a>
        </li>
      </ul>
      <p>
        <small>&copy; 2021 Abhishek Kumar Pandey, All rights reserved.</small>
      </p>
    </footer>
  );
};
