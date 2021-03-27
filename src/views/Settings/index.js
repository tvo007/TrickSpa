import React, {useEffect} from 'react';
// import PropTypes from 'prop-types'
import SettingsView from './SettingsView';
import {useHistory} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';

const Settings = props => {

  const history = useHistory()
  const dispatch = useDispatch()

  const {userInfo, loaded: isLoggedIn} = useSelector (state => state.userLogin);

  useEffect (
    () => {
      if (!isLoggedIn) {
        history.push ('/landing');
      } 
    },
    [history, userInfo, isLoggedIn, dispatch ]
  );

  return <SettingsView isLoggedIn={isLoggedIn} userInfo={userInfo}/>;
};

// Settings.propTypes = {

// }

export default Settings;
