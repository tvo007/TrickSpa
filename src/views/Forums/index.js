import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import ForumsView from './ForumsView';
import {useHistory} from 'react-router-dom';
// import {getPosts} from '../../actions/postActions';
import {getSections} from '../../actions/sectionActions';
// import {getComments} from '../../actions/comment';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';

const Forums = props => {
  const localState = JSON.parse (localStorage.getItem ('state')); //testing purposes

  const [isEmpty, setIsEmpty] = useState(false)
  const dispatch = useDispatch ();

  const history = useHistory ();

  const {sections, loading: isSectionLoading, error} = useSelector (
    state => state.sections
  );

  useEffect (
    () => {
    if (sections) {
      setIsEmpty(false)
      console.log(localState)
    }
    },
    [sections]
  );

  useEffect (
    () => {
      if (isEmpty)
      dispatch (getSections ());
    },
    [dispatch]
  );
  //section names have spaces and single quotes
  //parsing function to cleanly format routing names

  /**
   * Notes 2.1.21 
   * inc localStorage
   */

  

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
