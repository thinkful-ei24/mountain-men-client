import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_ERROR
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
    return Object.assign({}, state, {
      jobs: [...this.state.jobs, action.jobs],
      loading: false
    })
  } else if( action.type === FETCH_JOBS_ERROR ) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  }

  else {
  return state
  }
}
