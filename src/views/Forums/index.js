import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {getPosts} from '../../actions/post';
import {getComments} from '../../actions/comment';
import {useDispatch, useSelector} from 'react-redux';
import {Grid, Typography} from '@material-ui/core';

const Forums = props => {
  const dispatch = useDispatch ();


  const dispatch = useDispatch()

  useEffect (
    () => {
      dispatch (getPosts ());
    },
    [dispatch]
  );


  const {posts, isPostLoading} = useSelector (state => state.post);

  const {comments, isCommentLoading} = useSelector (state => state.comment);

  const showComments = comments.map( comment => {
    return <Grid>
      <Typography>{comment.body}</Typography>
    </Grid>
  })


  return (
    <Grid>

        <Typography variant="h1">
                This is the forums page.
        </Typography>
      </Grid>
      <Grid>
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


