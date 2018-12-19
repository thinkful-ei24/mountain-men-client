import {
    GET_ALL_BIDS_ERROR,
    GET_ALL_BIDS_REQUEST,
    GET_ALL_BIDS_SUCCESS
  } from '../actions/jobs.js';

  const initialState = {
    bids: [],
    loading: false,
    error: null
  }

  export const bidsReducer = (state = initialState, action) => {
    if (action.type === GET_ALL_BIDS_REQUEST) {
      return Object.assign({}, state, {
        loading: true,
        error: null
      })
    } else if (action.type === GET_ALL_BIDS_SUCCESS) {
      return Object.assign({}, state, {
        bids: action.bids,
        loading: false
      })
    } else if( action.type === GET_ALL_BIDS_ERROR ) {
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      })
    } else {
    return state
    }
  }

