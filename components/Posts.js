import Post from "./Post";
import styles from "./Post.module.css";

const PostsList = ({ posts }) => {
  return (
    <div className={styles.posts}>
      {posts.map((ele) => (
        <Post {...ele} key={ele._id} />
      ))}
    </div>
  );
};

export default PostsList;
