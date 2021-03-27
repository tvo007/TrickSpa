import React, {useEffect} from 'react';
// import PropTypes from 'prop-types'
import SettingsView from './SettingsView';
import {useHistory} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';

import {isEmpty} from 'underscore'

const Settings = props => {

  const history = useHistory()
  const dispatch = useDispatch()

  const {userInfo, success} = useSelector (state => state.userLogin);

  useEffect (
    () => {
      if (isEmpty(userInfo)) {
        history.push ('/landing');
      } 
    },
    [history, userInfo, dispatch ]
  );

  return <SettingsView />;
};

// Settings.propTypes = {

// }

export default Settings;
