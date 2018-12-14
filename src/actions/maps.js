import {API_BASE_URL} from '../config.js';
import Geocode from 'react-geocode';

Geocode.setApiKey('AIzaSyDrIU9xfNYMyLfY1hZ9sn4kHL_U86NRNOY')

export const FETCH_COORDINATES_REQUEST = 'FETCH_COORDINATES_REQUEST'
export const fetchCoordinatesRequest = () => ({
  type: FETCH_COORDINATES_REQUEST,
})

export const FETCH_COORDINATES_SUCCESS = 'FETCH_COORDINATES_SUCCESS'
export const fetchCoordinatesSuccess = (center) => ({
  type: FETCH_COORDINATES_SUCCESS,
  center
})

export const FETCH_COORDINATES_ERROR = 'FETCH_COORDINATES_ERROR'
export const fetchCoordinatesError = (error) => ({
  type: FETCH_COORDINATES_ERROR,
  error
})

export const getMapCenter = () => (dispatch, getState) => {
  const address = getState().auth.currentUser.userAddress;
  console.log(address)
  dispatch(fetchCoordinatesRequest());
  Geocode.fromAddress(address)
    .then(response => {
      const {lat, lng} = response.results[0].geometry.location;
      const center = {lat, lng}
      console.log('center', center)
      dispatch(fetchCoordinatesSuccess(center))
    })
    .catch(err => {
      console.log(err)
      dispatch(fetchCoordinatesError(err))
    })
}


///////////////////////ACTION CODE TO GET A SINGLE JOB ///////////////////////////
// export const FETCH_JOB_REQUEST = 'FETCH_JOB_REQUEST';
// export const fetchJobRequest = () => ({
//   type: FETCH_JOB_REQUEST
// })
//
// export const FETCH_JOB_SUCCESS = 'FETCH_JOB_SUCCESS';
// export const fetchJobSuccess = (job) => ({
//   type: FETCH_JOB_SUCCESS,
//   job
// })
//
// export const FETCH_JOB_ERROR = 'FETCH_JOB_ERROR';
// export const fetchJobError = (error) => ({
//   type: FETCH_JOB_ERROR,
//   error
// })
//
// export const viewJobCard = (jobId) => (dispatch, getState) => {
//   const authToken = getState().auth.authToken
//   return fetch(`${API_BASE_URL}/api/jobs/${id}`, {
//     method: 'GET',
//     header: {
//       Authorization: `Bearer ${authToken}`,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({id: jobId})
//   })
//     .then(res => res.json())
//     .then(job => dispatch(fetchJobSuccess(job)))
//     .catch(err => dispatch(fetchJobError(job)))
// }
