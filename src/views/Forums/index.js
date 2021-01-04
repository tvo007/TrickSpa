import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {getPosts} from '../../actions/postActions';
// import {getComments} from '../../actions/comment';
import {useDispatch, useSelector} from 'react-redux';
import {Grid, Typography} from '@material-ui/core';

const useStyles = makeStyles (theme => ({
  root: {
    padding: theme.spacing (4),
  },
}));

const Forums = props => {
  const dispatch = useDispatch ();

  useEffect (
    () => {
      dispatch (getPosts ());
    },
    [dispatch]
  );

  const {posts, loading, error} = useSelector (state => state.posts);

  // const {comments, isCommentLoading} = useSelector (state => state.comment);

  // const showComments = comments.map (comment => {
  //   return (
  //     <Grid>
  //       <Typography>{comment.body}</Typography>
  //     </Grid>
  //   );
  // });

  const classes = useStyles ();

  return (
    <div className={classes.root}>

      <Grid>
        <Grid>

          <Typography variant="h1">
            This is the forums page.
          </Typography>
        </Grid>

        {loading
          ? <Grid><Typography>LOADING</Typography></Grid>
          : error
              ? <Grid><Typography>ERROR</Typography> </Grid>
              : <Grid>
                  <Typography>
                    # of posts: {posts.length}
                  </Typography>
                  <Typography>
                    Todo: expand into a fully functional message board
                  </Typography>

                </Grid>}

      </Grid>
    </div>
  );
};

Forums.propTypes = {};

export default Forums;
