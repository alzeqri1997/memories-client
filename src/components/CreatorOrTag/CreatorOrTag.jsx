import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom'
import { getPostsBySearch, getPostsByCreator } from '../../actions/posts';
import { Typography, Divider, CircularProgress, Grid } from '@material-ui/core'
import Post from '../Posts/Post/Post'


const CreatorOrTag = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector(state => state.postReducer);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/tags')) {
      dispatch(getPostsBySearch({ tags: name }));
    } else {
      dispatch(getPostsByCreator(name))
    }
  }, []);

  // if (!posts.length && !isLoading) return 'No Posts';

  return (
    <div>
      <Typography variant="h2"> {name} </Typography>
      <Divider style={{ margin: '20px 0 50px 0' }} />
      {isLoading ? <CircularProgress /> : (
        <Grid container spacing={3} alignItems="stretch">
          {posts?.map((post) => (
            <Grid key={post._id} item xs={12} md={6} lg={3} >
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  )
}

export default CreatorOrTag;