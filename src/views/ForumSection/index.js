import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {getSection} from '../../actions/sectionActions';
import {getPostsBySection} from '../../actions/postActions';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import ForumSectionView from './ForumSectionView';

const ForumSection = props => {
  const {forumSlug} = useParams ();
  const history = useHistory ();
  const dispatch = useDispatch ();

  //useEffect to get single section data here
  const {section, loading: isSectionLoading, error} = useSelector (
    state => state.section
  );

  // const {posts, loading: isPostsLoading, error: postsError} = useSelector (
  //   state => state.posts
  // );

  const postCreateReducer = useSelector (state => state.postCreate);
  const {
    loading: createLoading,
    error: errorCreate,
    success: successCreate,
  } = postCreateReducer;

  useEffect (
    () => {
      dispatch (getSection (forumSlug));
      dispatch (getPostsBySection (forumSlug));
    },
    [dispatch, forumSlug]
  );

  useEffect (
    () => {
      if (successCreate) {
        dispatch (getSection (forumSlug));
      }
    },
    [successCreate]
  );
  //trigger rerender when post is successfully created

  //add post here
  //get section id pass off to createPost dispatch
  //add a form/seperate route to create a post

  return (
    <ForumSectionView
      section={section}
      isSectionLoading={isSectionLoading}
      error={error}
      history={history}
      createLoading={createLoading}
      errorCreate={errorCreate}
      successCreate={successCreate}
    
    />
  );
};

ForumSection.propTypes = {};

export default ForumSection;
