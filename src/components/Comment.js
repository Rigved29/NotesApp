import styles from "./Commentstyle.module.css";

const CommentItem = (props) => {
  return (
    <li className={styles.item}>
      <div>
        <h4>{props.name}</h4>
        <p>{props.body}</p>
      </div>
    </li>
  );
};

export default CommentItem;
