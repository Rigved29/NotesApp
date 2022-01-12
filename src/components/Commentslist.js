import Comment from "./Comment";
import styles from "./Commentlist.module.css";

const CommentsList = (props) => {
  return (
    <div>
      <h3>Comments</h3>
      <ul className={styles.comments}>
        {props.comments.map((comment) => (
          <Comment key={comment.id} body={comment.body} name={comment.name} />
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
