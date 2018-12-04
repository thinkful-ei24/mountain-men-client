import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/authReducer';
import formReducer from './reducers/formReducer';

const reducer = combineReducers({
  auth: authReducer,
  form: formReducer
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
