import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import {reducer as formReducer} from 'redux-form';
import authReducer from './reducers/authReducer';

const reducer = combineReducers({
  auth: authReducer,
  form: formReducer
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
