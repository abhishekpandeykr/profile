import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faJs } from "@fortawesome/free-brands-svg-icons";
import { SocialLinks } from "../socialLinks";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <FontAwesomeIcon icon={faCode} />
            Abhishek Kumar Pandey
          </h1>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href={SocialLinks.linkedin} target="_blank" rel="noreferrer">
            {" "}
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href={SocialLinks.github} target="_blank" rel="noreferrer">
            {" "}
            <FontAwesomeIcon icon={faGithub} />
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="#" className="button">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}