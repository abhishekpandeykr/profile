import { PortableText } from "../lib/sanity";
import styles from "./Post.module.css";
import Link from "next/link";

const Post = (post) => {
  const val = post.slug.current;
  return (
    <div className={styles.post}>
      <Link href={`/blog/${val}`}>
        <a href={`/blog/${val}`}>
          <p className={styles.title}>{post.title}</p>
        </a>
      </Link>
      {/* <pre>{JSON.stringify(body, null, 2)}</pre> */}
      <div className={styles["body"]}>
        <PortableText blocks={[post.body[0]]} />
      </div>
    </div>
  );
};

export default Post;
