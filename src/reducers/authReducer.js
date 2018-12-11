import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR
} from "../actions/auth.js";
import { LOAD_UPDATED_PROFILE } from "../actions/updateProfile";

const initialState = {
  authToken: null,
  currentUser: null,
  loading: false,
  error: null
};

export default function authReducer(state = initialState, action) {
  if (action.type === SET_AUTH_TOKEN) {
    // should assign the auth token from setAuthToken to state
    return Object.assign({}, state, {
      authToken: action.authToken
    });
  } else if (action.type === CLEAR_AUTH) {
    // should clear the current user
    return Object.assign({}, state, {
      authToken: null,
      currentUser: null
    });
  } else if (action.type === AUTH_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === AUTH_SUCCESS) {
    console.log("success", action.currentUser);
    return Object.assign({}, state, {
      currentUser: action.currentUser,
      loading: false
    });
  } else if (action.type === AUTH_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } else if (action.type === LOAD_UPDATED_PROFILE) {
    return Object.assign({}, state, {
      currentUser: action.user
    });
  }
  return state;
}
