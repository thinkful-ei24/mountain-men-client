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
  const address = getState().auth.currentUser.address;
  dispatch(fetchCoordinatesRequest());
  Geocode.fromAddress(address)
    .then(response => {
      const {lat, lng} = response.results[0].geometry.location;
      const center = {lat, lng}
      dispatch(fetchCoordinatesSuccess(center))
    })
    .catch(err => {
      dispatch(fetchCoordinatesError(err))
    })
}
