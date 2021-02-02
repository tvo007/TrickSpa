import React, {useState, useEffect, Fragment} from 'react';

import PropTypes from 'prop-types';
import PageHeading from '../../components/PageHeading';
import OriginalPost from './components/OriginalPost';
import OriginalPostSkeleton from './components/OriginalPostSkeleton';
import Comment from './components/Comment';
import CommentSkeleton from './components/CommentSkeleton';
import Reply from './components/Reply';
import Nav from '../../components/Nav';
//experimental componets
//
import DescriptionIcon from '@material-ui/icons/Description';
import CreateIcon from '@material-ui/icons/Create';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles (theme => ({
  buttonText: {
    color: theme.palette.primary.contrastText,
  },
}));

const PostView = ({
  post,
  isPostLoading,
  error,
  commentsByPost,
  commentsError,
  isCommentsLoading,
  commentCreateLoading,
  commentCreateError,
  commentCreateSuccess,
  dispatch,
  createComment,
}) => {
  // For testing skeleton-loader
  const [loading, setLoading] = useState (true);
  useEffect (() => {
    setTimeout (() => setLoading (false), 3000);
  }, []);

  const author = post.user ? post.user.username : null;

  const [body, setBody] = useState ('');

  const submitHandler = e => {
    e.preventDefault ();
    dispatch (createComment ({body, post: {id: post.id}, user: {id: 1}}));
    setBody ('');
  };

  //83aus version

  const comments = commentsByPost.map (comment => (
    <Comment
      author={comment.user ? comment.user.username : null}
      body={comment.body}
      key={comment.id}
      loading={loading}
      postTitle={comment.post ? comment.post.title : null}
    />
  ));

  const classes = useStyles ();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <PageHeading title={post.section ? post.section.name : null} />
        <Nav />
      </Grid>

      <Grid item xs={12} />

      {error
        ? <Typography>Error!</Typography>
        : isPostLoading
            ? <Fragment>
                <Grid item xs={12}>
                  <OriginalPostSkeleton />
                </Grid>
              </Fragment>
            : <Fragment>

                <Grid item xs={12}>
                  {/**this is where we can start creating a specific component to decorate the OP  */}
                  <OriginalPost
                    author={author}
                    body={post.body}
                    post={post}
                    title={post.title}
                  />

                </Grid>
              </Fragment>}

      <Grid item xs={12}>
        {isPostLoading
          ? <Fragment>
              <CommentSkeleton />
              <CommentSkeleton />
              <CommentSkeleton />
            </Fragment>
          : <Fragment>{comments}</Fragment>}

      </Grid>

       <Grid item xs={12}>
        <Reply body={body} setBody={setBody} submitHandler={submitHandler} />
      </Grid>

    </Grid>
  );
};

PostView.propTypes = {};

export default PostView;
