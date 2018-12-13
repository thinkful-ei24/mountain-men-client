import {
  FETCH_COORDINATES_REQUEST,
  FETCH_COORDINATES_SUCCESS,
  FETCH_COORDINATES_ERROR
} from '../actions/maps.js';
import Geocode from "react-geocode";


const initialState = {
  mapCenter: {},
  jobMarkers: [],
  loading: false,
  error: null
}

// mapCenter: {lat: some integer, lng: some integer}
// jobMarkers: [{lat: 12, lng: -23}, {lat:56.23, lng:-88.345},...]

export const mapReducer = (state = initialState, action) => {
  if(action.type === FETCH_COORDINATES_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === FETCH_COORDINATES_SUCCESS) {
    return Object.assign({}, state, {
      mapCenter: action.center,
      loading: false,
    })
  } else if (action.type === FETCH_COORDINATES_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  }
  return state
}
