import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {getSection} from '../../actions/sectionActions';
import {getPostsBySection} from '../../actions/postActions';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import CreatePostView from './CreatePostView';

const CreatePost = props => {
  const {forumSlug} = useParams ();
  const history = useHistory ();
  const dispatch = useDispatch ();

  const {
    section,
    loading: isSectionLoading,
    error: errorSection,
  } = useSelector (state => state.section);

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
        history.push (`/forums/${forumSlug}`);
      }
    },
    [successCreate]
  );
  return (
    <CreatePostView
      section={section}
      isSectionLoading={isSectionLoading}
      errorSection={errorSection}
      createLoading={createLoading}
      errorCreate={errorCreate}
      success={successCreate}
      history={history}
      forumSlug={forumSlug}
    />
  );
};

CreatePost.propTypes = {};

export default CreatePost;
