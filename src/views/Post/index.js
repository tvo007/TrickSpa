import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import PostView from './PostView';
import {getPost} from '../../actions/postActions';
import {Typography} from '@material-ui/core';

const Post = props => {
  const {postSlug} = useParams ();
  const dispatch = useDispatch ();
  //useEffect to get single section data here

  useEffect (
    () => {
      dispatch (getPost (postSlug));
    },
    [dispatch, postSlug]
  );

  const {post, loading: isPostLoading, error} = useSelector (
    state => state.postDetails
  );

  return <PostView post={post} isPostLoading={isPostLoading} error={error} />;
};

Post.propTypes = {};

export default Post;
