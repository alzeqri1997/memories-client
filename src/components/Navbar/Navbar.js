import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import memoriesLogo from "../../images/memoriesLogo.png";
import memoriesText from "../../images/memoriesText.png";

import useStyle from "./styles";

const Navbar = () => {
  //   const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [user, setUser] = useState(true);
  //   const dispatch = useDispatch();
  //   const location = useLocation();
  //   const history = useHistory();
  const classes = useStyle();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/posts">
        <img
          component={Link}
          to="/"
          src={memoriesText}
          alt="icon"
          height="45px"
        />
        <img src={memoriesLogo} alt="icon" height="40px" />
      </Link>
    </AppBar>
  );
};

export default Navbar;
