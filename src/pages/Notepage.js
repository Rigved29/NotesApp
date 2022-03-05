import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Commentslist from "../components/Commentslist";
import styles from "./Notepagestyle.module.css";
import Post from "../components/Note";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const PostPage = (props) => {
  console.log(props.uId);
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const history = useHistory(); //using useHistory() to getback to mainPage

  const match = useRouteMatch();
  const params = useParams(); //using useparams() to get postId

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}`
      );
      const post = await response.json();
      console.log(post);
      setPost(post);
    };

    const getComments = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${params.postId}`
      );
      const commentsArr = await response.json();
      console.log(commentsArr);
      setComments(commentsArr);
    };

    getPost(); //fetching a particular post

    getComments(); //fetching comments on post
  }, []);

  const deletePostHandler = () => {
    const deletePost = async () => {
      // console.log(quote, uniqueID);

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      console.log(response, data);
    };

    history.push("/allposts");

    deletePost(); //deleting a post using http "DELETE" req
  };

  if (!post) {
    return <h2>post</h2>;
  }

  return (
    <div>
      <Post body={post.body} title={post.title} />
      <Route path={match.path}>
        <div className={styles.right}>
          <Link to={`/editpost/${params.postId}`} className={styles.btn}>
            edit
          </Link>
          <button onClick={deletePostHandler} className={styles.btndelete}>
            Delete
          </button>
        </div>
        <Link to={`${match.url}/comments`} className={styles.btn}>
          Comments
        </Link>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Commentslist comments={comments} />
      </Route>
    </div>
  );
};

export default PostPage;
