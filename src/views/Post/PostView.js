import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import PageHeading from '../../components/PageHeading';
import OriginalPost from './components/OriginalPost';
import Comment from './components/Comment';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Divider,
} from '@material-ui/core';

const PostView = ({
  post,
  isPostLoading,
  error,
  commentsByPost,
  commentsError,
  isCommentsLoading,
}) => {
  const author = post.user ? post.user.username : null;

  const comments = isCommentsLoading
    ? <Typography>Loading</Typography>
    : commentsError
        ? <Typography>Error!</Typography>
        : commentsByPost.map (comment => (
            <Comment
              key={comment.id}
              body={comment.body}
              title="GENERIC TITLE TO BE CHANGED"
              author="GENERIC USERNAME"
            />
          ));

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <PageHeading title={post.section ? post.section.name : null} />
      </Grid>
      {isPostLoading
        ? <Typography>Loading</Typography>
        : error
            ? <Typography>Error!</Typography>
            : <Fragment>

                <Grid item xs={12}>
                  {/**this is where we can start creating a specific component to decorate the OP  */}
                  <OriginalPost
                    title={post.title}
                    body={post.body}
                    author={author}
                    post={post}
                  />

                </Grid>
              </Fragment>}
      <Grid item xs={12}>
        {/**comments section goes here */}

        {/* {post.comments
                    ? post.comments.map (comment => (
                        <Comment key={comment.id} body={comment.body} title={post.title}/>
                      ))
                    : null} */}
        {comments}
      </Grid>

    </Grid>
  );
};

PostView.propTypes = {};

export default PostView;
