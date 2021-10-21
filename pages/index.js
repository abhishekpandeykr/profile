import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { sanityClient } from "../lib/sanity";

import Content from "../components/content";
import { ContactMe } from "../components/ContactMe";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

const postsQuery = `*[_type=="post"]{
  _id,
  title,
  slug,
  author,
  body
}`;

export default function Home() {
  return (
    <div>
      <Navbar />
      <Content />
      <div className="gradient"></div>
      <ContactMe />
      <div className="gradient"></div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const posts = await sanityClient.fetch(postsQuery);
  console.log("postws", posts);
  return {
    props: {
      data: [],
    },
  };
}
