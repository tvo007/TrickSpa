import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {
  postListReducer,
  postDetailsReducer,
} from './reducers/postReducers'
import {
  sectionListReducer,
  sectionReducer
} from './reducers/sectionReducer'
import {commentsByPostReducer} from './reducers/commentReducers'
//import setAuthToken from './utils/setAuthToken';

const reducer = combineReducers({
  posts: postListReducer,
  postDetails: postDetailsReducer,
  sections: sectionListReducer,
  section: sectionReducer,
  commentsByPost: commentsByPostReducer

})



const initialState = {};

const middleware = [thunk];

const store = createStore (
    // rootReducer,
    reducer,
  initialState,
  composeWithDevTools (applyMiddleware (...middleware))
);

// set up a store subscription listener
// to store the users token in localStorage

// initialize current state from redux store for subscription comparison
// preventing undefined error

// let currentState = store.getState ();

// store.subscribe (() => {
//   // keep track of the previous and current state to compare changes
//   let previousState = currentState;
//   currentState = store.getState ();
//   // if the token changes set the value in localStorage and axios headers
//   if (previousState.auth.token !== currentState.auth.token) {
//     const token = currentState.auth.token;
//     setAuthToken (token);
//   }
// }); ACTIVATE WHEN SETTING UP AUTH STUFF

export default store;
