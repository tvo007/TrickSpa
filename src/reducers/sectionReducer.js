import {
  SECTIONS_GET_REQUEST,
  SECTIONS_GET_SUCCESS,
  SECTIONS_GET_FAIL,
  SECTION_GET_REQUEST,
  SECTION_GET_SUCCESS,
  SECTION_GET_FAIL,
} from '../constants/sectionConstants';

export const sectionListReducer = (state = {sections: []}, action) => {
  switch (action.type) {
    case SECTIONS_GET_REQUEST:
      return {loading: true, sections: []};
    case SECTIONS_GET_SUCCESS:
      return {loading: false, sections: action.payload};
    case SECTIONS_GET_FAIL:
      return {loading: false, sections: action.payload};
    default:
      return state;
  }
};
