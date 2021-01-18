import axios from 'axios';
import {
    COMMENTS_GET_BY_POST_REQUEST,
    COMMENTS_GET_BY_POST_SUCCESS,
    COMMENTS_GET_BY_POST_FAIL
} from '../constants/commentConstants';
import api from '../utils/api';

export const getCommentsByPost = (postSlug) => async dispatch => {
    try {
      dispatch ({
        type: COMMENTS_GET_BY_POST_REQUEST,
      });
  
      //     const {userLogin: {userInfo}} = getState ();
  
      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${userInfo.token}`,
      //   },
      // };
  
      //TODO: ^^ ADD AUTH
  
      const {data} = await axios.get (`${api}/comments?post.slug=${postSlug}`);
  
      dispatch ({
        type: COMMENTS_GET_BY_POST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message = error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
      //   if (message === 'Not authorized, token failed') {
      //     dispatch (logout ());
      //   }
      //TODO: ^^ add auth
  
      dispatch ({
        type: COMMENTS_GET_BY_POST_FAIL,
        payload: message,
      });
    }
  };