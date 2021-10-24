import styles from "./style.module.css";
import { sanityClient } from "../../lib/sanity";
import PostsList from "../../components/Posts";

const postsQuery = `*[_type=="post"]{
  _id,
  author,
  title,
  slug,
  body
}`;
const Blog = ({ posts }) => {
  return (
    <div className={styles["posts"]}>
      <PostsList posts={posts} />
    </div>
  );
};

export default Blog;

export async function getServerSideProps() {
  const posts = await sanityClient.fetch(postsQuery);
  return {
    props: {
      posts,
    },
  };
}
