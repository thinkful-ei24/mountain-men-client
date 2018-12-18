import {
    GET_USER_ERROR,
    GET_USER_REQUEST,
    GET_USER_SUCCESS
  } from '../actions/getUser';
  
  const initialState = {
    users: [],
    loading: false,
    error: null
  }
  
  export const userReducer = (state = initialState, action) => {
    if (action.type === GET_USER_REQUEST) {
      return Object.assign({}, state, {
        loading: true,
        error: null
      })
    } else if (action.type === GET_USER_SUCCESS) {
      return Object.assign({}, state, {
        users: [...state.users, action.user],
        loading: false
      })
    } else if( action.type === GET_USER_ERROR ) {
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      })
    } else {
    return state
    }
  }
  