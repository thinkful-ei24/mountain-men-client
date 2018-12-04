import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR
} from '../actions/auth.js';

const initialState = {
  authToken: null,
  currentUser: null,
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === SET_AUTH_TOKEN) {
    // should assign the auth token from setAuthToken to state
    return Object.assign({}, state, {
      authToken: action.authToken
    })
  } else if (action.type === CLEAR_AUTH) {
    // should clear the current user
    return Object.assign({}, state, {
      authToken: null,
      currentUser: null
    })
  } else if (action.type === AUTH_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  } else if (action.type === AUTH_SUCCESS) {
    return Object.assign({}, state, {
      currentUser: action.currentUser,
      loading: false
    })
  } else if (action.type === AUTH_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  }
  return state;
}
