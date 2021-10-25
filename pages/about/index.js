import styles from "./about.module.css";
import Image from "next/image";
const About = () => {
  return (
    <>
      <div className="gradient" />
      <div className={styles.about}>
        <section>
          <h2>About Abhishek Pandey</h2>
          <article>
            <div className={styles.profile}>
              <h3>Summary</h3>
              <p className={styles.box}>
                Versatile Front End Engineer with half decade of Experience
                Designing and building CMS Applications for Financial Sectors
                and Multimedia Houses. Proficient with extensive Knowledge of
                Frontend and CMS Frameworks. Notable Achievements Include
                Creating an Image Editor and Improving the Performance of CMS
                application by 60%.
              </p>
              <h4>Technologies which I'm Comfortable At</h4>
              <ul>
                <li>Snowpack</li>
                <li>Webpack</li>
                <li>Angular(v4+)</li>
                <li>AngularJS</li>
                <li>React JS</li>
                <li>Svelte JS</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <img src="/image.jpeg" alt="Profile Picture" />
          </article>
        </section>
      </div>
    </>
  );
};

export default About;
