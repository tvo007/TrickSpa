import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import ForumsView from './ForumsView';
import {useHistory} from 'react-router-dom';
// import {getPosts} from '../../actions/postActions';
import {getSections} from '../../actions/sectionActions';
// import {getComments} from '../../actions/comment';
import {useDispatch, useSelector} from 'react-redux';

const Forums = props => {
  const dispatch = useDispatch ();

  const history = useHistory ();

  

  const {sections, loading: isSectionLoading, error} = useSelector (
    state => state.sections
  );

  useEffect (
    () => {
      dispatch (getSections ());
    },
    [dispatch]
  );




  //section names have spaces and single quotes
  //parsing function to cleanly format routing names

  return (
    <ForumsView
      sections={sections}
      isSectionLoading={isSectionLoading}
      error={error}
      history={history}
    />
  );
};

Forums.propTypes = {};

export default Forums;
