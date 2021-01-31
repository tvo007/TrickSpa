import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import PostView from './PostView';
import {getPost} from '../../actions/postActions';
import {getCommentsByPost, createComment} from '../../actions/commentActions';

const Post = props => {
  const {postSlug} = useParams ();
  const dispatch = useDispatch ();
  //useEffect to get single section data here

  const {post, loading: isPostLoading, error} = useSelector (
    state => state.postDetails
  );

  const {
    comments,
    loading: isCommentsLoading,
    error: commentsError,
  } = useSelector (state => state.commentsByPost);

  const {
    loading: commentCreateLoading,
    error: commentCreateError,
    success: commentCreateSuccess,
  } = useSelector (state => state.commentCreate);

  useEffect (
    () => {
      dispatch (getPost (postSlug));
      dispatch (getCommentsByPost (postSlug));
    },
    [dispatch, postSlug]
  );

  useEffect (
    () => {
      if (commentCreateSuccess) {
        dispatch (getCommentsByPost (postSlug));
        //trigger rerender on success
      }
    },
    [commentCreateSuccess]
  );

  return (
    <PostView
      post={post}
      isPostLoading={isPostLoading}
      error={error}
      commentsByPost={comments}
      isCommentsLoading={isCommentsLoading}
      commentsError={commentsError}
      commentCreateLoading={commentCreateLoading}
      commentCreateError={commentCreateError}
      commentCreateSuccess={commentCreateSuccess}
      createComment={createComment}
      dispatch={dispatch}
    />
  );
};

Post.propTypes = {};

export default Post;
