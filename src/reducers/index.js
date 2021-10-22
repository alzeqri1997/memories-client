import { combineReducers } from 'redux';

import postReducer from './posts';
import authReducer from './auth';

export const reducers = combineReducers({ postReducer, authReducer });
