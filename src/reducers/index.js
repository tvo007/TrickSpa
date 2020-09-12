import {combineReducers}  from 'redux'
import alert from './alert'
import post from './post'
import comment from './comment'
import profile from './profile'

export default combineReducers({
  alert,
  post,
  comment,
  profile
});
