import axios from 'axios';
import {
  SECTIONS_GET_REQUEST,
  SECTIONS_GET_SUCCESS,
  SECTIONS_GET_FAIL,
  SECTION_GET_REQUEST,
  SECTION_GET_SUCCESS,
  SECTION_GET_FAIL,
} from '../constants/sectionConstants';
import api from '../utils/api';

export const getSections = () => async dispatch => {
  try {
    dispatch ({
      type: SECTIONS_GET_REQUEST,
    });

    const {data} = await axios.get (`${api}/sections`);

    dispatch ({
      type: SECTIONS_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    dispatch ({
      type: SECTIONS_GET_FAIL,
      payload: message,
    });
  }
};

export const getSection = forumSlug => async dispatch => {
  try {
    dispatch ({
      type: SECTION_GET_REQUEST,
    });

    const {data} = await axios.get (`${api}/sections/slug/${forumSlug}`);

    dispatch ({
      type: SECTION_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    dispatch ({
      type: SECTION_GET_FAIL,
      payload: message,
    });
  }
};
