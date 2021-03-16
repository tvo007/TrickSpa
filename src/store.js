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
import {
  userLoginReducer,
  userLogoutReducer,
  userRegisterReducer
} from './reducers/userReducers'
import {
  alertReducer
} from './reducers/alertReducers'
import {
  userProfileReducer,
  myProfileReducer,
} from './reducers/profileReducers'
//import setAuthToken from './utils/setAuthToken';

const reducer = combineReducers ({
  posts: postListReducer,
  postDetails: postDetailsReducer,
  postCreate: postCreateReducer,
  sectionList: sectionListReducer,
  sectionDetails: sectionReducer,
  commentsByPost: commentsByPostReducer,
  commentCreate: commentCreateReducer,
  userLogin: userLoginReducer,
  logout: userLogoutReducer,
  userRegister: userRegisterReducer,
  alert: alertReducer,
  userProfile: userProfileReducer,
  myProfile: myProfileReducer
});

const sectionsFromLocalStorage = localStorage.getItem ('sections')
  ? JSON.parse (localStorage.getItem ('sections'))
  : []; //gets sections from LS, thunks update LS on dispatch

const sectionFromLocalStorage = localStorage.getItem ('section')
  ? JSON.parse (localStorage.getItem ('section'))
  : {}; //gets sections from LS, thunks update LS on dispatch

const initialState = {
  sectionList: {sections: sectionsFromLocalStorage},
  // userLogin: { userInfo: userInfoFromStorage },
  sectionDetails: {
    section: {sectionFromLocalStorage},
  },
};

const middleware = [thunk];

const store = createStore (
  // rootReducer,

  reducer,
  // persistedState,
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
//   if (
//     previousState.sectionList.sections !== currentState.sectionList.sections
//   ) {
//     localStorage.setItem (
//       'sectionList',
//       JSON.stringify (currentState.sectionList.sections) //LS model 3
//     );
//   }
// });

export default store;

/**
 * only apply to section
 * 
 * 
 * subscribe v1 initial:
 * const initialState = {
  // sections: {
  //   sections: sectionsFromLocalStorage
  // },
  // userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk];


const store = createStore (
  // rootReducer,
  
  reducer,
  // persistedState,
  initialState,
  composeWithDevTools (applyMiddleware (...middleware))
);

 * 
 * subscribe v2:
 * // function saveToLocalStorage(state) {
//   try {
//     const serializedState = JSON.stringify(state)
//     localStorage.setItem('state', serializedState)
//   } catch(e) {
//     console.log(e)
//   }
// } 

// function loadFromLocalStorage() {
//   try {
//     const serializedState = localStorage.getItem('state')
//     if (serializedState === null) return undefined
//     return JSON.parse(serializedState)
//   } catch (e) {
//     console.log(e)
//     return undefined
//   }
// }

const middleware = [thunk];

// const persistedState = loadFromLocalStorage()

const store = createStore ( 
  reducer,
   persistedState,
  composeWithDevTools (applyMiddleware (...middleware))
);

// store.subscribe(() => saveToLocalStorage(store.getState()))

 */

/*subscribe v3
-adjust for changes in thunks
*/
