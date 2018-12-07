import {
    GET_ALL_JOBS_ERROR,
    GET_ALL_JOBS_REQUEST,
    GET_ALL_JOBS_SUCCESS
  } from '../actions/jobs.js';
  
  const initialState = {
    driverJobs: [],
    loading: false,
    error: null
  }
  
  export const driverJobsReducer = (state = initialState, action) => {
    if (action.type === GET_ALL_JOBS_REQUEST) {
      return Object.assign({}, state, {
        loading: true,
        error: null
      })
    } else if (action.type === GET_ALL_JOBS_SUCCESS) {
      return Object.assign({}, state, {
        driverJobs: action.jobs,
        loading: false
      })
    } else if( action.type === GET_ALL_JOBS_ERROR ) {
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      })
    }
  
    else {
    return state
    }
  }
  