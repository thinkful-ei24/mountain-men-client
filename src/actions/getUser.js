import { API_BASE_URL } from "../config.js";

export const GET_USER_REQUEST = "FETCH_USER_REQUEST";
export const getUserRequest = () => ({
  type: GET_USER_REQUEST
});

export const GET_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  user
});

export const GET_USER_ERROR = "FETCH_USER_ERROR";
export const getUserError = error => ({
  type: GET_USER_ERROR,
  error
});

export const getUser = id => (dispatch, getState) => {
  dispatch(getUserRequest());
  console.log(id);
  return fetch(`${API_BASE_URL}/api/profile/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(user => {
        console.log(user);
      dispatch(getUserSuccess(user));
    })
    .catch(err => {
      dispatch(getUserError(err));
    });
};
