import { UPDATE_VIEW } from "../actions/view";

const initialState = {
  view: "default"
};

export const viewReducer = (state = initialState, action) => {
  if (action.type === UPDATE_VIEW) {
    return Object.assign({}, state, {
      view: action.view
    });
  } else {
    return state;
  }
};
