import Post from "./Post";
import styles from "./Post.module.css";

const PostsList = ({ posts }) => {
  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <Post {...post} key={post._id} />
      ))}
    </div>
  );
};

export default PostsList;
