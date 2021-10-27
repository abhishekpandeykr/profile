import styles from "./about.module.css";
import Image from "next/image";
import { server } from "../../config";
import data from "../api/data.json";
const About = () => {
  const aboutMe = data?.aboutMe;
  return (
    <>
      <div className="gradient" />
      <div className={styles.about}>
        <section>
          <h2>{aboutMe?.title}</h2>
          <article>
            <div className={styles.profile}>
              <h3>Summary</h3>
              <p className={styles.box}>{aboutMe?.summary}</p>
              <h4>Technologies which I'm Comfortable At</h4>
              <ul>
                {aboutMe?.technologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
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

// export async function getStaticProps() {
//   const URL = process.env.API_END_POINT;
//   console.log("Server is", server);
//   const data = await fetch(`${URL}/api/about-me`);
//   const res = await data.json();
//   return {
//     props: {
//       res,
//     },
//   };
// }
