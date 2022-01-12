import { NavLink } from "react-router-dom";
import styles from "./headerstyle.module.css";
import { useState } from "react";

const Naviagtion = () => {
  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow(!show);
  };

  return (
    <div className={styles.cnt}>
      <header className={styles.header}>
        <div className={styles.logo}>Rigved</div>

        <div className={styles.hamburger} onClick={showHandler}>
          <div className={styles.hamburger}></div>
          <div className={styles.hamburger}></div>
          <div className={styles.hamburger}></div>
        </div>
      </header>
      {show && (
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink to="/allposts" activeClassName={styles.active}>
                All Posts
              </NavLink>
            </li>

            <li>
              <NavLink to="/addpost" activeClassName={styles.active}>
                Add a New Post
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
      <nav className={styles.nav1}>
        <ul>
          <li>
            <NavLink to="/allposts" activeClassName={styles.active}>
              All Posts
            </NavLink>
          </li>
          <li>
            <NavLink to="/addpost" activeClassName={styles.active}>
              Add a New Post
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Naviagtion;
