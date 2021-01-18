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

const PostView = ({post, isPostLoading, error}) => {
  const author = post.user ? post.user.username : null;

  const comments = post.comments
    ? post.comments.map (comment => (
        <Comment
          key={comment.id}
          body={comment.body}
          title={post.title}
          author={comment.user.username}
        />
      ))
    : null;

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
                <Grid item xs={12}>
                  {/**to be mapped */}

                  {/* {post.comments
                    ? post.comments.map (comment => (
                        <Comment key={comment.id} body={comment.body} title={post.title}/>
                      ))
                    : null} */}
                  {comments}
                </Grid>
              </Fragment>}

    </Grid>
  );
};

PostView.propTypes = {};

export default PostView;
