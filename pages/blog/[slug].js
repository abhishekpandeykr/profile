import { sanityClient, PortableText } from "../../lib/sanity";
import styles from "./style.module.css";
import Head from "next/head";

const blogQuery = `*[_type=="post" && slug.current == $slug][0]{
    title,
    body,
    publishedAt,
}`;

const formatDate = (date) => {
  if (date) {
    const newDate = new Date(date.toString());
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    if (day < 10) {
      day = `0${day}`;
    }
    if (month < 10) {
      month = `0${month}`;
    }
    return `${day}/${month}/${newDate.getFullYear()}`;
  }
};
export default function PostById({ curretBlog }) {
  return (
    <div className={styles.singlePost}>
      <Head>
        <title>{curretBlog?.title}</title>
      </Head>
      <h3 className={styles.title}>{curretBlog?.title}</h3>
      <p className={styles.body}>
        <PortableText blocks={curretBlog?.body} />
      </p>
      <div className={styles.metaInfo}>
        <span>Abhishek Kumar Pandey</span>
        <span>Pulished at: {formatDate(curretBlog?.publishedAt)}</span>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths =
    await sanityClient.fetch(`*[_type=="post" && defined(slug.current)]{
        "params":{
            "slug":slug.current
        }
    }`);
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const curretBlog = await sanityClient.fetch(blogQuery, { slug });
  return {
    props: {
      curretBlog,
    },
  };
}
