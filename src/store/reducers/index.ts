import { combineReducers } from 'redux';

import { userAuthReducer } from './user-auth-reducer';
import { appReducer } from './app-reducer';
import { tracksReducer } from './tracks-reducer';
import { albumsReducer } from './albums-reducer';

export const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  app: appReducer,
  tracks: tracksReducer,
  albums: albumsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
