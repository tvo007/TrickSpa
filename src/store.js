/* eslint-disable linebreak-style */
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import rootReducer from './reducers';
import {
  postListReducer,
  postDetailsReducer,
  postCreateReducer,
} from './reducers/postReducers';
import {sectionListReducer, sectionReducer} from './reducers/sectionReducer';
import {
  commentsByPostReducer,
  commentCreateReducer,
} from './reducers/commentReducers';
//import setAuthToken from './utils/setAuthToken';

const reducer = combineReducers ({
  posts: postListReducer,
  postDetails: postDetailsReducer,
  postCreate: postCreateReducer,
  sections: sectionListReducer,
  section: sectionReducer,
  commentsByPost: commentsByPostReducer,
  commentCreate: commentCreateReducer
});

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch(e) {
    console.log(e)
  }
} 

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    console.log(e)
    return undefined
  }
}

// const initialState = {
//   // sections: {
//   //   sections: sectionsFromLocalStorage
//   // },
//   // userLogin: { userInfo: userInfoFromStorage },
// }

const middleware = [thunk];

const persistedState = loadFromLocalStorage()

const store = createStore (
  // rootReducer,
  
  reducer,
  persistedState,
  // initialState,
  composeWithDevTools (applyMiddleware (...middleware))
);

store.subscribe(() => saveToLocalStorage(store.getState()))

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
