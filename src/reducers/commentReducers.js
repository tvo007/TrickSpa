import {
    COMMENTS_GET_BY_POST_REQUEST,
    COMMENTS_GET_BY_POST_SUCCESS,
    COMMENTS_GET_BY_POST_FAIL
  } from '../constants/commentConstants';

  export const commentsByPostReducer = (state = {comments: []}, action) => {
    switch (action.type) {
      case COMMENTS_GET_BY_POST_REQUEST:
        return {loading: true, comments: []};
      case COMMENTS_GET_BY_POST_SUCCESS:
        return {loading: false, comments: action.payload};
      case COMMENTS_GET_BY_POST_FAIL:
        return {loading: false, comments: action.payload};
      default:
        return state;
    }
  };