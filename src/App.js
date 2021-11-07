// import { Container } from '@material-us/core';
import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import PostDetails from "./components/PostDetails/PostDetails";
import CreatorOrTag from "./components/CreatorOrTag/CreatorOrTag";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  useEffect(() => {
    if (!user) setUser("");
  }, [user]);
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/posts" />} />
          <Route exact path="/posts" component={Home} />
          <Route exact path="/posts/search" component={Home} />
          <Route exact path="/posts/:id" component={PostDetails} />
          <Route
            exact
            path={["/creators/:name", "/tags/:name"]}
            component={CreatorOrTag}
          />
          <Route
            exact
            path="/auth"
            component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
          />
          <Route
            path="*"
            component={() => (
              <div>
                <h1> not Found</h1>
                <Link to="/">Go back</Link>
              </div>
            )}
          />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
