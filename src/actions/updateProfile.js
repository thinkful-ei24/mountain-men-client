import { SubmissionError } from "redux-form";

import { API_BASE_URL } from "../config.js";
import { normalizeResponseErrors } from "./utils.js";

export const LOAD_UPDATED_PROFILE = "LOAD_UPDATED_PROFILE";
const loadUpdatedProfile = user => ({
  type: LOAD_UPDATED_PROFILE,
  user
});

const updateProfile = user => (dispatch, getState) => {
  const {
    email,
    firstName,
    lastName,
    phoneNumber,
    street,
    city,
    state,
    zip,
    type
  } = user;

  const authToken = getState().auth.authToken;
  const userId = getState().auth.currentUser.id;
  return fetch(`${API_BASE_URL}/api/profile/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + authToken
    },
    body: JSON.stringify({
      email,
      firstName,
      lastName,
      phoneNumber,
      address: {
        street: street,
        city: city,
        state: state,
        zip: zip
      },
      type
    })
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res => {
      dispatch(loadUpdatedProfile(res));
    })

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

export default updateProfile;
