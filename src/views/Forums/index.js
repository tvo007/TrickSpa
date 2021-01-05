import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import PageHeading from '../../components/PageHeading';
import {getPosts} from '../../actions/post';
import {getComments} from '../../actions/comment';
import {useDispatch, useSelector} from 'react-redux';
import {Grid, Typography} from '@material-ui/core';

const Forums = props => {
  const dispatch = useDispatch ();

  useEffect (
    () => {
      dispatch (getPosts ());
    },
    [dispatch]
  );


  const {posts, isPostLoading} = useSelector (state => state.post);

  const {comments, isCommentLoading} = useSelector (state => state.comment);

  const showComments = comments.map( comment => {
    return (
      <Grid>
        <Typography>{comment.body}</Typography>
      </Grid>
    );
  })


  return (
    <Grid container>
      <Grid
        item
        xs={12}
      >
        <PageHeading title="Forums" />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <Typography>

                # of posts: {posts.length}
        </Typography>
        <Typography>
                Todo: expand into a fully functional message board
        </Typography>

      </Grid>            
    </Grid>        
  )
}

Forums.propTypes = {

}

export default Forums


