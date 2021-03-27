import {
    PROFILE_GET_REQUEST,
    PROFILE_GET_SUCCESS,
    PROFILE_GET_FAIL,
    PROFILE_IS_OWNER,
    CLEAR_PROFILE,
    MY_PROFILE_GET_REQUEST,
    MY_PROFILE_GET_SUCCESS,
    MY_PROFILE_GET_FAIL
} from '../constants/profileConstants'

export const userProfileReducer = (state = {userProfile: []}, action) => {
    switch (action.type) {
      case PROFILE_GET_REQUEST:
        return {...state, loading: true};
      case PROFILE_GET_SUCCESS:
        return {...state, loading: false, loaded: true, userProfile: [action.payload], isOwner: false};
      case PROFILE_IS_OWNER: 
        return {...state, isOwner: true}
      case PROFILE_GET_FAIL:
        return {loading: false, error: action.payload};
      case CLEAR_PROFILE: 
      return {}
      default:
        return state;
    }
  };

  export const myProfileReducer = (state = {myProfile: []}, action) => {
    switch (action.type) {
      case MY_PROFILE_GET_REQUEST:
        return {...state, loading: true};
      case MY_PROFILE_GET_SUCCESS:
        return { loading: false, myProfile: action.payload};
      case MY_PROFILE_GET_FAIL:
        return {loading: false, error: action.payload};
      default:
        return state;
    }
  };