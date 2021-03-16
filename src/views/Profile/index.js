import React, {useEffect} from 'react';
// import PropTypes from 'prop-types';
import ProfileView from './ProfileView';
import {useParams} from 'react-router-dom';

// import {getPosts} from '../../actions/postActions';
import {getProfile} from '../../actions/profileActions';
// import {getComments} from '../../actions/comment';
import {useDispatch, useSelector} from 'react-redux';

const Profile = props => {
  const {profileSlug} = useParams ();
  const dispatch = useDispatch ();

  const {userProfile, loading, error} = useSelector (
    state => state.userProfile
  );

  useEffect (
    () => {
      dispatch (getProfile (profileSlug));
    },
    [dispatch, profileSlug]
  );



  return <ProfileView userProfile={userProfile}/>;
};

// Profile.propTypes = {};

export default Profile;
