import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import PageHeading from '../../components/PageHeading';
import OriginalPost from './components/OriginalPost';
import Comment from './components/Comment';
import Reply from './components/Reply';
import Nav from '../../components/Nav'
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
              key={comment.id}
              body={comment.body}
              author={comment.user ? comment.user.username : null}
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
      <Grid item xs={12}>
        <Grid container direction="row">
          <Typography>
            <DescriptionIcon fontSize="large" />
          </Typography>
          <Typography variant="h3">
            {post.title}
          </Typography>
        </Grid>

        <Grid container spacing={1}>
          <Grid item>
            <Button variant="contained" color="primary" size="small">
              <Typography variant="button" className={classes.buttonText}>
                Reply <CreateIcon fontSize="small" />
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" size="small">
              <Typography variant="button" className={classes.buttonText}>
                Reply <CreateIcon fontSize="small" />
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" size="small">
              <Typography variant="button" className={classes.buttonText}>
                Reply <CreateIcon fontSize="small" />
              </Typography>
            </Button>
          </Grid>

        </Grid>
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
      <Grid item xs={12}>
        <Reply />

      </Grid>

    </Grid>
  );
};

PostView.propTypes = {};

export default PostView;
