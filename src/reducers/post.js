//post and comment reducers go here
import {
  GET_POSTS,
  POST_ERROR,
  // UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  EDIT_POST,
  ADD_COMMENT,
  // REMOVE_COMMENT
} from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  isPostLoading: true,
  error: {},
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        isPostLoading: false,
      };
    case GET_POST:
      return {
        ...state,
        post: payload,
        isPostLoading: false,
      };
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map (
          (post, index) => (post.id === payload.id ? payload : post)
        ),
      };
    case ADD_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        isPostLoading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter (post => post.id !== payload),
        isPostLoading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        isPostLoading: false,
      };
    //   case UPDATE_LIKES:
    //     return {
    //       ...state,
    //       posts: state.posts.map(post =>
    //         post._id === payload.id ? { ...post, likes: payload.likes } : post
    //       ),
    //       isPostLoading: false
    //     };
      case ADD_COMMENT:
        return {
          ...state,
          post: { ...state.post, comments: payload },
          isPostLoading: false
        };
    //   case REMOVE_COMMENT:
    //     return {
    //       ...state,
    //       post: {
    //         ...state.post,
    //         comments: state.post.comments.filter(
    //           comment => comment._id !== payload
    //         )
    //       },
    //       isPostLoading: false
    //     };
    default:
      return state;
  }
}
