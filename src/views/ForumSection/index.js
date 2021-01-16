import React, {useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {getSection} from '../../actions/sectionActions';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import ForumSectionView from './ForumSectionView';


const ForumSection = props => {
  const {forumSlug} = useParams ();
  const history = useHistory();
  const dispatch = useDispatch ();
  //useEffect to get single section data here

  useEffect (
    () => {
      dispatch (getSection (forumSlug));
    },
    [dispatch, forumSlug]
  );

  const {section, loading: isSectionLoading, error} = useSelector (
    state => state.section
  );

  return (
    <ForumSectionView
      section={section}
      isSectionLoading={isSectionLoading}
      error={error}
      history={history}
    />
  );
};

ForumSection.propTypes = {};

export default ForumSection;
