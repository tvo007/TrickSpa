import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import PostView from './PostView';
import {getPost} from '../../actions/postActions';
import {getCommentsByPost} from '../../actions/commentActions'

const Post = props => {
  const { postSlug} = useParams ();
  const dispatch = useDispatch ();
  //useEffect to get single section data here

  useEffect (
    () => {
      dispatch (getPost (postSlug));
      dispatch(getCommentsByPost(postSlug))
    },
    [dispatch, postSlug]
  );

  const {post, loading: isPostLoading, error} = useSelector (
    state => state.postDetails
  );

  const {comments, loading: isCommentsLoading, error: commentsError} = useSelector (
    state => state.commentsByPost
  ); 


  return (
    <PostView
      post={post}
      isPostLoading={isPostLoading}
      error={error}
      commentsByPost={comments}
      isCommentsLoading={isCommentsLoading}
      commentsError={commentsError}
    />
  );
};

Post.propTypes = {};

export default Post;
