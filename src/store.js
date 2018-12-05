import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import {reducer as formReducer} from 'redux-form';
import authReducer from './reducers/authReducer';

import {loadAuthToken} from './local-storage';
import {setAuthToken, refreshAuthToken} from './actions/auth';

// const reducer = combineReducers({
//   auth: authReducer,
//   form: formReducer
// })

// const store = createStore(reducer, applyMiddleware(thunk));

const mainReducer = (s = null) => s;

const store = createStore(
  combineReducers({
    main: mainReducer,
    form: formReducer,
    auth: authReducer,
  }),
  applyMiddleware(thunk),
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;
