import axios from 'axios';
import api from '../utils/api'
import {setAlert} from './alert';

import {
  // USER_LOADED,
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  // UPDATE_PROFILE,
  ACCOUNT_DELETED,
  CLEAR_PROFILE,
} from './types';

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/profile/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
    
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//get all profiles
export const getProfiles = () => async dispatch => {
  try {
    const res = await axios.get (`${api}/profiles`);

    dispatch ({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch ({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};

//get profile by id
export const getProfileById = userId => async dispatch => {
  try {
    const res = await axios.get (`/profile/user/${userId}`);

    dispatch ({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch ({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};

//create or update profile

export const createProfile = (
    formData,
    history,
    edit = false
  ) => async dispatch => {
    try {
      
  
      const res = await axios.post ('/profile', formData);
  
      dispatch ({
        type: GET_PROFILE,
        payload: res.data,
      });
  
  
  
      dispatch (
        setAlert (edit ? 'Profile Updated' : 'Profile Created', 'success')
      );
  
      // if (!edit) {
      //   history.push ('/dashboard');
      // }
    } catch (err) {
      const errors = err.response.data.errors;
  
      if (errors) {
        errors.forEach (error => dispatch (setAlert (error.msg, 'danger')));
      }
  
      dispatch ({
        type: PROFILE_ERROR,
        payload: {msg: err.response.statusText, status: err.response.status},
      });
    }
  };
  //delete accnt & profile

export const deleteAccount = () => async dispatch => {
    if (window.confirm ('Are you sure? This can NOT be undone!')) {
      try {
        await axios.delete (`/profile`);
  
        dispatch ({
          type: CLEAR_PROFILE,
        });
  
        dispatch ({
          type: ACCOUNT_DELETED,
        });
  
        dispatch (setAlert ('Your account has been permanently deleted'));
      } catch (err) {
        dispatch ({
          type: PROFILE_ERROR,
          payload: {msg: err.response.statusText, status: err.response.status},
        });
      }
    }
  };