import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getSection} from '../../actions/sectionActions';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import ForumSectionView from './components/ForumSectionView';


const ForumSection = props => {
  const {slug} = useParams ();
  const dispatch = useDispatch ();
  //useEffect to get single section data here

  useEffect (
    () => {
      dispatch (getSection (slug));
    },
    [dispatch, slug]
  );

  const {section, loading: isSectionLoading, error} = useSelector (
    state => state.section
  );

  return (
    <ForumSectionView
      section={section}
      isSectionLoading={isSectionLoading}
      error={error}
    />
  );
};

ForumSection.propTypes = {};

export default ForumSection;
