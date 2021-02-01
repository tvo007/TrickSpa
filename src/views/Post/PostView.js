import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import PageHeading from '../../components/PageHeading';
import OriginalPost from './components/OriginalPost';
import Comment from './components/Comment';
import Reply from './components/Reply';
import Nav from '../../components/Nav';
//experimental componets
import CommentV2 from './components/CommentV2';
import CommentV3 from './components/CommentV3';
import OP2 from './components/OP2';
import OP3 from './components/OP3';
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
}) => {
  const author = post.user ? post.user.username : null;

  const comments = isCommentsLoading
    ? <Typography>Loading</Typography>
    : commentsError
      ? <Typography>Error!</Typography>
      : commentsByPost.map (comment => (
        <Comment
          author={comment.user ? comment.user.username : null}
          body={comment.body}
          key={comment.id}
          postTitle={comment.post ? comment.post.title : null}
        />
      ));

  //tivos version
  const comments2 = isCommentsLoading
    ? <Typography>Loading</Typography>
    : commentsError
      ? <Typography>Error!</Typography>
      : commentsByPost.map (comment => (
        <CommentV2
          author={comment.user ? comment.user.username : null}
          body={comment.body}
          key={comment.id}
          postTitle={comment.post ? comment.post.title : null}
        />
      ));

  //83aus version
  const comments3 = isCommentsLoading
    ? <Typography>Loading</Typography>
    : commentsError
      ? <Typography>Error!</Typography>
      : commentsByPost.map (comment => (
        <CommentV3
          author={comment.user ? comment.user.username : null}
          body={comment.body}
          key={comment.id}
          postTitle={comment.post ? comment.post.title : null}
        />
      ));

  const classes = useStyles ();

  return (
    <Grid
      container
      spacing={4}
    >
      <Grid
        item
        xs={12}
      >
        <PageHeading title={post.section ? post.section.name : null} />
        <Nav />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <Grid
          container
          direction="row"
        >
          <Typography>
            <DescriptionIcon fontSize="large" />
          </Typography>
          <Typography variant="h3">
            {post.title}
          </Typography>
        </Grid>
      </Grid>

      {isPostLoading
        ? <Typography>Loading</Typography>
        : error
          ? <Typography>Error!</Typography>
          : <Fragment>

            <Grid
              item
              xs={12}
            >
              {/**this is where we can start creating a specific component to decorate the OP  */}
              <OriginalPost
                author={author}
                body={post.body}
                post={post}
                title={post.title}
              />

            </Grid>
          </Fragment>}
      <Grid
        item
        xs={12}
      >
        {/**comments section goes here */}

        {/* {post.comments
                    ? post.comments.map (comment => (
                        <Comment key={comment.id} body={comment.body} title={post.title}/>
                      ))
                    : null} */}
        {comments}
      </Grid>
      <Typography>
        tivos version VVVVV
      </Typography>


      {error
        ? <Typography>Error!</Typography>
        : <Fragment>

          <Grid
            item
            xs={12}
          >
            {/**this is where we can start creating a specific component to decorate the OP  */}
            <OP3
              author={author}
              body={post.body}
              loading={loading}
              post={post}
              title={post.title}
            />

          </Grid>
        </Fragment>}
   
      <Grid
        item
        xs={12}
      >

        {comments2}
      </Grid>

      <Typography>tivos version ^^^^</Typography>

      <Grid
        item
        xs={12}
      />

      <Typography>83aus version VVVV</Typography>

      {isPostLoading
        ? <Typography>Loading</Typography>
        : error
          ? <Typography>Error!</Typography>
          : <Fragment>

            <Grid
              item
              xs={12}
            >
              {/**this is where we can start creating a specific component to decorate the OP  */}
              <OP3
                author={author}
                body={post.body}
                post={post}
                title={post.title}
              />

            </Grid>
          </Fragment>}
   
      <Grid
        item
        xs={12}
      >

        {comments3}
      </Grid>

      <Typography>83aus version ^^^^</Typography>

      <Grid
        item
        xs={12}
      >
        <Reply />

      </Grid>

    </Grid>
  );
};

PostView.propTypes = {};

export default PostView;
