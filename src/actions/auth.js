import jwtDecode from "jwt-decode";
import { SubmissionError } from "redux-form";
import { updateView } from "./view";
import { API_BASE_URL } from "../config.js";
import { saveAuthToken, clearAuthToken } from "../local-storage.js";
import { normalizeResponseErrors } from "./utils.js";

export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";
export const setAuthToken = authToken => ({
  type: SET_AUTH_TOKEN,
  authToken
});

export const CLEAR_AUTH = "CLEAR_AUTH";
export const clearAuth = () => ({
  type: CLEAR_AUTH
});

export const AUTH_REQUEST = "AUTH_REQUEST";
export const authRequest = () => ({
  type: AUTH_REQUEST
});

export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const authSuccess = currentUser => ({
  type: AUTH_SUCCESS,
  currentUser
});

export const AUTH_ERROR = "AUTH_ERROR";
export const authError = error => ({
  type: AUTH_ERROR,
  error
});

const storeAuthInfo = (authToken, dispatch) => {
  const decodeToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodeToken.user));
  saveAuthToken(authToken);
};

export const login = input => dispatch => {
  let email = input.email;
  let password = input.password;
  dispatch(authRequest());
  return fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ authToken }) => {
      storeAuthInfo(authToken, dispatch);
    })
    .then(() => {
      dispatch(updateView("default"));
    })
    .catch(err => {
      const { status } = err;
      const message =
        status === 401
          ? "Incorrect username or password"
          : "Unable to login, please try again";
      dispatch(authError(err));
      return Promise.reject(
        new SubmissionError({
          _error: message
        })
      );
    });
};

export const refreshAuthToken = () => (dispatch, getState) => {
  dispatch(authRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/login/refresh`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      dispatch(authError(err));
      dispatch(clearAuth());
      clearAuthToken(authToken);
    });
};

export const registerUser = user => dispatch => {
  const { password, email } = user;

  const reqBody = {
    email,
    password,
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber,
    address: {
      street: user.street,
      city: user.city,
      state: user.state,
      zip: user.zip
    },
    type: user.type
  };
  console.log(reqBody);
  return fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reqBody)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(() => dispatch(login({ email, password })))
    .catch(err => {
      const { reason, message, location } = err;
      if (reason === "ValidationError") {
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      } else {
        return Promise.reject(
          new SubmissionError({
            email: message
          })
        );
      }
    });
};
