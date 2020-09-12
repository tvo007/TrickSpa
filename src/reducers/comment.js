//post and comment reducers go here
import {
    GET_COMMENTS,
    ADD_COMMENT,
    DELETE_COMMENT,
    EDIT_COMMENT,
    POST_ERROR
  } from '../actions/types';
  
  const initialState = {
    comments: [],
    comment: null,
    isCommentLoading: true,
    error: {},
  };
  
  export default function (state = initialState, action) {
    const {type, payload} = action;
  
    switch (type) {
      case GET_COMMENTS:
        return {
          ...state,
          comments: payload,
          isCommentLoading: false,
        };
      case ADD_COMMENT:
        return {
          ...state,
          comments: [payload, ...state.comments],
          isCommentLoading: false,
        };
        case EDIT_COMMENT:
      return {
        ...state,
        comments: state.comments.map (
          (comment) => (comment.id === payload.id ? payload : comment)
        ),
      };
      case DELETE_COMMENT:
        return {
          ...state,
          comments: state.comments.filter (comment => comment.id !== payload),
          isCommentLoading: false,
        };
      case POST_ERROR:
        return {
          ...state,
          error: payload,
          isCommentLoading: false,
        };

      //   case UPDATE_LIKES:
      //     return {
      //       ...state,
      //       posts: state.posts.map(post =>
      //         post._id === payload.id ? { ...post, likes: payload.likes } : post
      //       ),
      //       isCommentLoading: false
      //     };
      //   case REMOVE_COMMENT:
      //     return {
      //       ...state,
      //       post: {
      //         ...state.post,
      //         comments: state.post.comments.filter(
      //           comment => comment._id !== payload
      //         )
      //       },
      //       isCommentLoading: false
      //     };
      default:
        return state;
    }
  }
  