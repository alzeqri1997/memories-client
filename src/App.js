// import { Container } from '@material-us/core';
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/posts" />} />
        <Route exact path="/posts" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
