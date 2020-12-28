import React, {useEffect} from 'react';
import PropTypes from 'prop-types'
import {getPosts} from '../../actions/post'
import {useDispatch, useSelector} from 'react-redux';
import {Grid, Typography} from '@material-ui/core'

const Forums = (props) => {

  const dispatch = useDispatch()

  useEffect (
    () => {
      dispatch (getPosts ());
    },
    [dispatch]
  );

      
  const {posts, isPostLoading} = useSelector (state => state.post);

  return (
    <Grid>
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

