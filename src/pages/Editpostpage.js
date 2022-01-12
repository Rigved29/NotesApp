import { useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styles from "./Editpoststyle.module.css";

const NewCommentForm = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const bodyRef = useRef();
  const titleRef = useRef(); //using useRef() for getting input values

  const params = useParams(); //using useparams() to get postId

  const history = useHistory(); //using useHistory() to getback to mainPage

  const submitFormHandler = (event) => {
    event.preventDefault();

    const submitEdit = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
        {
          method: "PUT",
          body: JSON.stringify({
            title: title,
            body: body,
            date: new Date(),
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      const data = await response.json();

      console.log(data);
    };

    if (title !== "" && body !== "") {
      console.log({ topic: title, text: body });

      submitEdit();
    }

    history.push("/allposts");
  };

  const titleHandler = (e) => {
    console.log(titleRef.current.value);
    setTitle(titleRef.current.value);
  };

  const bodyHandler = (e) => {
    console.log(bodyRef.current.value);
    setBody(bodyRef.current.value);
  };

  // useEffect(() => {
  //   setTitle(props.author);
  //   setBody(props.text);
  // }, []);

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <div className={styles.control} onSubmit={submitFormHandler}>
        <label htmlFor="topic">Topic</label>
        <textarea
          id="topic"
          rows="2"
          ref={titleRef}
          value={title}
          className={styles.m}
          onChange={titleHandler}
        ></textarea>
        <label htmlFor="body">body</label>
        <textarea
          id="body"
          rows="5"
          ref={bodyRef}
          value={body}
          onChange={bodyHandler}
        ></textarea>
      </div>
      <div className={styles.actions}>
        <button className="btn">Submit</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
