//post and comment actions go here
import axios from 'axios'
import api from '../utils/api';
import {setAlert} from './alert';
import {
  GET_POSTS,
  POST_ERROR,
  //   UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  EDIT_POST,
} from './types';



export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get (`${api}/posts`);

    dispatch ({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch ({
      type: POST_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};

export const getPost = id => async dispatch => {
  try {
    const res = await axios.get (`${api}/${id}`);

    dispatch ({
      type: GET_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch ({
      type: POST_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};

//add project
export const addPost = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    // const res =

    const res = await axios.post (`${api}/posts`, formData, config);

    dispatch ({
      type: ADD_POST,
      payload: res.data,
    });

    dispatch (setAlert ('Post Created', 'success'));
  } catch (err) {
    dispatch ({
      type: POST_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};

//update post
export const editPost = (id, formData) => async dispatch => {
  try {
    // const res =

    const res = await axios.put (`${api}/${id}`, formData);

    dispatch ({
      type: EDIT_POST,
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

//del post
export const deletePost = id => async dispatch => {
  try {
    // const res =

    await axios.delete (`${api}/posts/${id}`);

    dispatch ({
      type: DELETE_POST,
      payload: id,
    });

    dispatch (setAlert ('Post Removed', 'success'));
  } catch (err) {
    dispatch ({
      type: POST_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};
