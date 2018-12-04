import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/authReducer';
import formReducer from './reducers/formReducer';

const store = createStore(
  authReducer,
  formReducer,
  applyMiddleware(thunk),
);

export default store;