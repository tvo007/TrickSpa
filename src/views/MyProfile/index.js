import React, {useEffect} from 'react';
// import PropTypes from 'prop-types';
import MyProfileView from './MyProfileView';
import {useHistory} from 'react-router-dom';

// import {getPosts} from '../../actions/postActions';
import {getMyProfile} from '../../actions/profileActions';
// import {getComments} from '../../actions/comment';
import {useDispatch, useSelector} from 'react-redux';


//personal profile route, do the long way round and see how to refactor

const MyProfile = props => {
  const dispatch = useDispatch ();
  const history = useHistory()

  // const {myProfile, loading, error} = useSelector (state => state.myProfile);

  const {userInfo, success} = useSelector(state => state.userLogin)

  useEffect(() => {
    if (!success) {
      history.push('/landing')
    } else if (userInfo) {
      dispatch(getMyProfile(userInfo.user.uuid))
    }
  }, [history, userInfo, dispatch, success])


  return <MyProfileView  />;
};

// Profile.propTypes = {};

export default MyProfile;
