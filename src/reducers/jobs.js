import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_ERROR,
  UPDATE_JOBS_REQUEST,
  UPDATE_JOBS_SUCCESS,
  UPDATE_JOBS_ERROR,
  UPDATE_BID_REQUEST,
  UPDATE_BID_SUCCESS,
  UPDATE_BID_ERROR,
} from '../actions/jobs.js';

const initialState = {
  jobs: [],
  loading: false,
  error: null
}

export const jobsReducer = (state = initialState, action) => {
  if (action.type === FETCH_JOBS_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  } else if (action.type === FETCH_JOBS_SUCCESS) {
    console.log('IN REDUCER', action.jobs)
    return Object.assign({}, state, {
      jobs: action.jobs,
      loading: false
    })
  } else if( action.type === FETCH_JOBS_ERROR ) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  } else if (action.type === UPDATE_JOBS_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  } else if (action.type === UPDATE_JOBS_SUCCESS) {
    return Object.assign({}, state, {
      loading: false
    })
  } else if( action.type === UPDATE_JOBS_ERROR ) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  } else if (action.type === UPDATE_BID_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  } else if (action.type === UPDATE_BID_SUCCESS) {
    return Object.assign({}, state, {
      loading: false
    })
  } else if( action.type === UPDATE_BID_ERROR ) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  } else {
  return state
  }
}
