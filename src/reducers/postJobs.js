import { postJobs } from "../actions/postJobs";

const initialState = {
  userJobs: []
};

export const jobsReducer = (state = initialState, action) => {
  if (action.type === postJobs) {
    return Object.assign({}, state, {
      userJobs: [...state.userJobs, action.jobs]
    });
  } else {
    return state;
  }
};
