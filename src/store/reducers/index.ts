import { combineReducers } from 'redux';

import { userAuthReducer } from './user-auth-reducer';
import { appReducer } from './app-reducer';

export const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
