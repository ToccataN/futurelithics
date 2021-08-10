import { createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";

import { UserAuth } from './auth/reducer'

const rootReducer = combineReducers({
  auth: UserAuth,
});

export const configureStore = () => {
  let store = createStore(rootReducer, applyMiddleware(thunk, logger));

  return { store };
};