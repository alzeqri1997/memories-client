import React, { useState, useRef } from 'react';
import { Typography, Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { commentPost } from '../../actions/posts'
import useStyles from './styles';
import { Alert } from '@material-ui/lab';

const CommentSection = ({ post }) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const [comment, setComment] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(false);
    const dispatch = useDispatch();
    const [comments, setComments] = useState(post?.comments);
    const classes = useStyles();
    const commentsRef = useRef();

    const handleComment = async () => {
        if (!user) setIsSignedIn(true);
        else {
            const newComments = await dispatch(commentPost(`${user?.result?.name}: ${comment}`, post._id));

            setComment('');
            setComments(newComments);

            commentsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }


    const handleOnKeydown = (e) => {
        if (e.keyCode === 13) {
            handleComment();
        }
    };

    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography style={{ position: 'sticky', top: '0', background: 'white' }} variant="h5" gutterBottom >Comments</Typography>
                    {comments?.map((c, i) => (
                        <Typography variant="subtitle1" gutterBottom key={i}>
                            <strong>{c.split(': ')[0]}</strong>
                            {c.split(':')[1]}
                        </Typography>
                    ))}
                    <div ref={commentsRef} />
                </div>

                <div style={{ width: '70%' }} >
                    <TextField
                        fullWidth
                        rows={4}
                        variant="outlined"
                        label="Write your comment"
                        multiline
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        onKeyDown={handleOnKeydown}
                    />
                    <br />
                    {
                        isSignedIn && <Alert severity="error">
                            you must sign in first
                        </Alert>
                    }
                    <Button variant="contained" style={{ marginTop: '10px' }} fullWidth disabled={!comment.length} color="primary" onClick={handleComment} >
                        Comment
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CommentSection;