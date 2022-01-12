import Header from "./layout/Header";
import Allposts from "./pages/Allposts";
import Postpage from "./pages/Postpage";
import Addpostpage from "./pages/Addpostpage";
import Editpost from "./pages/Editpostpage";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  // routes for all the pages in website

  return (
    <div>
      <Header />
      <h1>TechCarrel Assessment</h1>

      <Switch>
        <Route path="/" exact>
          <Redirect to="/allposts" />
        </Route>
        <Route path="/allposts" exact>
          <Allposts />
        </Route>
        <Route path="/posts/:postId">
          <Postpage />
        </Route>
        <Route path="/addpost">
          <Addpostpage />
        </Route>
        <Route path="/editpost/:postId">
          <Editpost />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
