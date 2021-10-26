import styles from "./about.module.css";
import Image from "next/image";
const About = ({ res }) => {
  console.log("props is", res);
  const { title, summary, technologies } = res.data?.aboutMe;
  return (
    <>
      <div className="gradient" />
      <div className={styles.about}>
        <section>
          <h2>{title}</h2>
          <article>
            <div className={styles.profile}>
              <h3>Summary</h3>
              <p className={styles.box}>{summary}</p>
              <h4>Technologies which I'm Comfortable At</h4>
              <ul>
                {technologies.map((tech, idx) => (
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

export async function getStaticProps() {
  const data = await fetch("http://localhost:3000/api/about-me");
  const res = await data.json();
  return {
    props: {
      res,
    },
  };
}
