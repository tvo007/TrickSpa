import React, {useState, Fragment} from 'react';
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
  commentCreateLoading,
  commentCreateError,
  commentCreateSuccess,
  dispatch,
  createComment,
}) => {
  const author = post.user ? post.user.username : null;

  const [body, setBody] = useState ('');

  const submitHandler = e => {
    e.preventDefault ();
    dispatch (createComment ({body, post: {id: post.id}, user: {id: 1}}));
    setBody ('');
  };

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

      {isPostLoading
        ? <Typography>Loading</Typography>
        : error
            ? <Typography>Error!</Typography>
            : <Fragment>

                <Grid item xs={12}>
                  {/**this is where we can start creating a specific component to decorate the OP  */}
                  <OP3
                    author={author}
                    body={post.body}
                    post={post}
                    title={post.title}
                  />

                </Grid>
              </Fragment>}

      <Grid item xs={12}>

        {comments3}
      </Grid>

      <Grid item xs={12}>
        <Reply body={body} setBody={setBody} submitHandler={submitHandler} />

      </Grid>

    </Grid>
  );
};

PostView.propTypes = {};

export default PostView;
