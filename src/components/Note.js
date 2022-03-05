import styles from "./Notestyle.module.css";

const post = (props) => {
  return (
    <figure className={styles.post}>
      <figcaption>{props.title}</figcaption>
      <p>{props.body}</p>
    </figure>
  );
};

export default post;
