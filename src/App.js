// import { Container } from '@material-us/core';
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/posts" />} />
        <Route exact path="/posts" component={Home} />
        <Route exact path="/posts/search" component={Home} />
        <Route exact path="/posts/:id" component={PostDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
