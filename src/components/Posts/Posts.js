import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector(state => state.postReducer);

  if (!posts.length && !isLoading) return 'No posts';

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid>
      {posts?.map(post => (
        <Grid>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
