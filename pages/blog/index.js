import styles from "./style.module.css";
import { sanityClient } from "../../lib/sanity";
import PostsList from "../../components/Posts";
import Head from "next/head";

const postsQuery = `*[_type=="post"]{
  _id,
  author,
  title,
  subTitle,
  slug,
  body
}`;
const Blog = ({ posts }) => {
  return (
    <div className={styles["posts"]}>
      <Head>
        <title>Blogs | Abhishek Kumar Pandey</title>
      </Head>
      <PostsList posts={posts} />
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = await sanityClient.fetch(postsQuery);
  return {
    props: {
      posts,
    },
  };
}
