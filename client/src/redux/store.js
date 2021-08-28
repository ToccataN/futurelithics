import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import storage from 'redux-persist/lib/storage'

import thunk from "redux-thunk";
import logger from "redux-logger";

import { UserAuth } from './auth/reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

const rootReducer = combineReducers({
  auth: UserAuth,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk, logger));
  let persistor = persistStore(store)

  return { store, persistor };
};