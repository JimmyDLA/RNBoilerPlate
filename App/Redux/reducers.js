import { combineReducers } from 'redux';

//import all Reducers
import { splash } from './modules/splash';
import { home } from './modules/home';

export const reducerList = {
  splash,
  home,
};

export const reducers = combineReducers(reducerList);
