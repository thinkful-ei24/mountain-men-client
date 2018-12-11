import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import {reducer as formReducer} from 'redux-form';
import authReducer from './reducers/authReducer';
import {jobsReducer} from './reducers/jobs.js';
import {bidsReducer} from './reducers/bidsReducer';
import {viewReducer} from './reducers/viewReducer';

import { loadAuthToken } from "./local-storage";
import { setAuthToken, refreshAuthToken } from "./actions/auth";

const mainReducer = (s = null) => s;

const store = createStore(
  combineReducers({
    main: mainReducer,
    form: formReducer,
    auth: authReducer,
    jobs: jobsReducer,
    view: viewReducer,
    bids: bidsReducer
  }),
  applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
