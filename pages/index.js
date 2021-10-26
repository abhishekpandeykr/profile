import Content from "../components/content";
import { ContactMe } from "../components/ContactMe";
import Head from "next/head";
import ProjectLayout from "../components/ProjectLayout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abhishek Kumar Pandey | Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Content />
      <div className="gradient"></div>
      {/* <ProjectLayout />
      <div className="gradient"></div> */}
      <ContactMe />
      <div className="gradient"></div>
    </div>
  );
}
