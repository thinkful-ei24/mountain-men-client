import { SubmissionError } from "redux-form";

import { API_BASE_URL } from "../config.js";
import { normalizeResponseErrors } from "./utils.js";



export const postJobs = job => dispatch => {
  const { title, description, date, budget, street, city, state, zipCode, id, authToken } = job;
  return fetch(`${API_BASE_URL}/api/jobs/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + authToken
    },
    body: JSON.stringify({title, description, date, budget, street, city, state, zipCode })
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
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
