import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faJs } from "@fortawesome/free-brands-svg-icons";
// import Link fron 'ne'
import Link from "next/link";
import { SocialLinks } from "../socialLinks";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <Link href="/">
              <a href="#">
                <FontAwesomeIcon icon={faCode} />
                Abhishek Kumar Pandey
              </a>
            </Link>
          </h1>
        </li>
        <li>
          <Link href="/blog">
            <a href="#">Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a href="#">About</a>
          </Link>
        </li>
        {/* <li>
          <a href="#">Contact</a>
        </li> */}
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
