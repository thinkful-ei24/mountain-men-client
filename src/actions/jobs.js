import {API_BASE_URL}

export const FETCH_JOBS_REQUEST = "FETCH_JOBS_REQUEST";
export const fetchJobsRequest = () => ({
  type: JOBS_REQUEST
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
  const authToken = getState().auth.aithToken;
  dispatch(fetchJobsRequest());
  return fetch(`${API_BASE_URL}/api/jobs`, {
    method: 'GET',
    headers: {
      'Content-Type: 'application/json',
      authorization: `Bearer ${authToken}`
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

