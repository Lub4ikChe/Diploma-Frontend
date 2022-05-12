import { combineReducers } from 'redux';

import { userAuthReducer } from './user-auth-reducer';
import { appReducer } from './app-reducer';
import { tracksReducer } from './tracks-reducer';

export const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  app: appReducer,
  tracks: tracksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
