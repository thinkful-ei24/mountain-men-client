import {API_BASE_URL} from '../config.js';

export const FETCH_JOBS_REQUEST = "FETCH_JOBS_REQUEST";
export const fetchJobsRequest = () => ({
  type: FETCH_JOBS_REQUEST
});

export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const fetchJobsSuccess = (jobs) => ({
  type: FETCH_JOBS_SUCCESS,
  jobs
});

export const FETCH_JOBS_ERROR = "FETCH_JOBS_ERROR";
export const fetchJobsError = (error) => ({
  type: FETCH_JOBS_ERROR,
  error
});

export const getUserJobs = () => (dispatch, getState) => {
  const userId = getState().auth.currentUser.id;
  dispatch(fetchJobsRequest());
  return fetch(`${API_BASE_URL}/api/jobs/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(jobs => {
      dispatch(fetchJobsSuccess(jobs))
    })
    .catch(err => {
      dispatch(fetchJobsError(err))
    })
};

// api/jobs
// send authToken in header


export const GET_ALL_JOBS_REQUEST = "FETCH_JOBS_REQUEST";
export const getAllJobsRequest = () => ({
  type: GET_ALL_JOBS_REQUEST
});

export const GET_ALL_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const getAllJobsSuccess = (jobs) => ({
  type: GET_ALL_JOBS_SUCCESS,
  jobs
});

export const GET_ALL_JOBS_ERROR = "FETCH_JOBS_ERROR";
export const getAllJobsError = (error) => ({
  type: GET_ALL_JOBS_ERROR,
  error
});

export const getAllJobs = () => (dispatch, getState) => {
  dispatch(getAllJobsRequest());
  return fetch(`${API_BASE_URL}/api/jobs`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(jobs => {
      dispatch(fetchJobsSuccess(jobs))
    })
    .catch(err => {
      dispatch(fetchJobsError(err))
    })
};

export const UPDATE_JOBS_REQUEST = "UPDATE_JOBS_COMPLETED";
export const updateJobsRequest = () => ({
  type: UPDATE_JOBS_REQUEST
})

export const UPDATE_JOBS_ERROR = "UPDATE_JOBS_ERROR"
export const updateJobsError = (error) => ({
  type: UPDATE_JOBS_ERROR,
  error
})

export const makeJobCompleted = (jobId) => (dispatch, getState) => {
  const userId = getState().auth.currentUser.id
  const authToken = getState().auth.authToken;
  dispatch(updateJobsRequest())
  fetch(`${API_BASE_URL}/api/jobs/${userId}/${jobId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({completed: true})
  })
    .then(result => result.json())
    .then (jobs => {
      dispatch(getUserJobs())
    })
    .catch(err => {
      dispatch(updateJobsError(err))
    })
};

