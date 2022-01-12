import { useRef, useState, Fragment } from "react";
import { Prompt } from "react-router-dom";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/Loader";
import styles from "./Postformstyle.module.css";

const PostForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const titleInputRef = useRef();
  const bodyInputRef = useRef(); //using useRef() for getting input values

  const removeFocusHandler = () => {
    setIsEntering(false);
  };

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredBody = bodyInputRef.current.value;

    // optional: Could validate here

    // changeInitial(true);

    if (enteredTitle !== "" && enteredBody !== "") {
      props.onAddPost({
        title: enteredTitle,
        body: enteredBody,
        method: "post",
        id: Math.random(),
        date: new Date(),
      });
    } else {
      alert("Invalid Values");
    }
  }

  const focusHandler = () => {
    setIsEntering(true);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          "If u leave then all your data will be lost,still u want to leave?"
        }
      />
      <Card>
        <form
          onFocus={focusHandler}
          className={styles.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={styles.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={styles.control}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" ref={titleInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={bodyInputRef}></textarea>
          </div>
          <div className={styles.actions}>
            <button onClick={removeFocusHandler} className="btn">
              {" "}
              Add Post
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default PostForm;
