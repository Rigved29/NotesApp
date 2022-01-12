import styles from "./Postcompstyle.module.css";
import { Link } from "react-router-dom";

const PostComp = (props) => {
  const postDate = props.date;

  return (
    <li className={styles.item}>
      <figure>
        <blockquote>
          <p>{props.title}</p>
        </blockquote>
        <h4>{props.body}</h4>
        <figcaption>{new Date(postDate).toLocaleDateString()}</figcaption>
      </figure>
      <Link to={`/posts/${props.id}`} className={styles.btns}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default PostComp;
