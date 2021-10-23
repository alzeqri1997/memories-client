import React, { useState } from 'react';
import { Container, Grow, AppBar, TextField, Button, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import ChipInput from 'material-ui-chip-input';

import { getPostsBySearch, getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const history = useHistory();
  return (
    <>
      <h1>Everything works just fine</h1>
      <Posts />
    </>
  );
};

export default Home;
