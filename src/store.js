import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import {reducer as formReducer} from 'redux-form';
import authReducer from './reducers/authReducer';
import {mapReducer} from './reducers/mapReducer.js';
import {jobsReducer} from './reducers/jobs.js';
import {bidsReducer} from './reducers/bidsReducer';
import {viewReducer} from './reducers/viewReducer';
import {userReducer} from './reducers/getUserReducer';
import {postJobsReducer} from './reducers/postJobs';
import { loadAuthToken } from "./local-storage";
import { setAuthToken, refreshAuthToken } from "./actions/auth";

const mainReducer = (s = null) => s;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( 
  combineReducers({
    main: mainReducer,
    form: formReducer,
    auth: authReducer,
    jobs: jobsReducer,
    view: viewReducer,
    bids: bidsReducer,
    user: userReducer,
    map: mapReducer,
    postJobs: postJobsReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
