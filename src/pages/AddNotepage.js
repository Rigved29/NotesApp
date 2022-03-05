import Postform from "../components/Noteform";
import { useHistory } from "react-router-dom";

const NewQuotes = (props) => {
  const history = useHistory(); //using useHistory() to getback to mainPage

  const addPost = async (d) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(d),
    });
    const data = await response.json();

    console.log(data);
  };

  const addPostHandler = (postData) => {
    addPost(postData, postData.id); //sending "POST" req

    history.push("/allposts");
  }; //sending addPostHandler() as a prop to Postform (state-lifting)

  return <Postform onAddPost={addPostHandler} />;
};

export default NewQuotes;
