import Post from "../components/NoteComp";
import { useEffect, useState } from "react";
import Loader from "../UI/Loader";

const AllQuotes = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [error, setError] = useState(false); // setting error-state, so that if any error may occur then it show proper error msg.
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllPosts = async () => {
      setIsLoading(true); //showing loader while fetching data

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        console.log(res);

        const allPosts = await res.json();

        setAllPosts(allPosts);
        setIsLoading(false); //hiding loader

        allPosts.forEach((el, i) => {
          localStorage.setItem(i, JSON.stringify(el));
        });
      } catch (err) {
        console.error(err);
        setError(true);
      }
    };

    getAllPosts(); // fetching all posts from api
  }, []);

  return (
    <div>
      {!error &&
        !isLoading &&
        allPosts.length !== 0 &&
        allPosts.map((el) => (
          <Post
            title={el.title}
            key={el.id}
            id={el.id}
            body={el.body}
            date={new Date("July 20, 2020")}
          />
        ))}
      {error && !isLoading && allPosts.length === 0 && (
        <h1>No Posts Found!! Please Check Your Internet Connection😌😌</h1>
      )}
      {!error && isLoading && allPosts.length === 0 && <Loader />}
    </div>
  );
};

export default AllQuotes;
