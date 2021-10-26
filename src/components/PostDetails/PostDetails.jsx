import React ,{useEffect} from "react";
import { Paper, Typography, CircularProgress, Divider } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory, Link } from "react-router";

import { getPost, getPostsBySearch } from "../../actions/posts";

const Post = () => {
    const { post, posts, isLoading } = useSelector((state) => state.postReducer);

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPost(id));
        
    }, [id]);

    useEffect(() => {
        if (post) {
            dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
        }
    }, [post])
    
    if (!post) return null;

    const openPost = (_id) => history.push(`/posts/${_id}`);

    if (isLoading) {
        return (
            <Paper elevation={6} >
                <CircularProgress size="7em" />
            </Paper>
        );
    }

    const recommednedPosts = posts.filter(({ _id }) => _id !== post._id);

    return (
        <Typography>
            {post}
        </Typography>
    )
}

export default Post;