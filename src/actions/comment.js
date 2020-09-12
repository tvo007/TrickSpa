import axios from 'axios';
import api from '../utils/api';
import {setAlert} from './alert';
import {
  GET_COMMENTS,
  POST_ERROR,
  DELETE_COMMENT,
  EDIT_COMMENT,
  ADD_COMMENT,
  //   REMOVE_COMMENT,
} from './types';

export const getComments = postId => async dispatch => {
  try {
    const res = await axios.get (`${api}/comments?post=${postId}`);

    dispatch ({
      type: GET_COMMENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch ({
      type: POST_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};

export const addComment = (postId, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post (
      `${api}/comments?post=${postId}`,
      formData,
      config
    );

    dispatch ({
      type: ADD_COMMENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch ({
      type: POST_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};

//del post
export const deleteComment = commentId => async dispatch => {
  try {
    // const res =

    await axios.delete (`${api}/comments/${commentId}`);

    dispatch ({
      type: DELETE_COMMENT,
      payload: commentId,
    });

    dispatch (setAlert ('Post Removed', 'success'));
  } catch (err) {
    dispatch ({
      type: POST_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};

//update comment
export const editComment = (commentId, formData) => async dispatch => {
  try {
    // const res =

    const res = await axios.put (`${api}/comments/${commentId}`, formData);

    dispatch ({
      type: EDIT_COMMENT,
      payload: res.data,
    });

    dispatch (setAlert ('Post Editted.', 'success'));
  } catch (err) {
    dispatch ({
      type: POST_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};
