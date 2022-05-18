import { combineReducers } from 'redux';

import { userAuthReducer } from './user-auth-reducer';
import { appReducer } from './app-reducer';
import { tracksReducer } from './tracks-reducer';
import { albumsReducer } from './albums-reducer';
import { authorsReducer } from './authors-reducer';
import { homeReducer } from './home-reducer';
import { playerReducer } from './player-reducer';

export const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  app: appReducer,
  tracks: tracksReducer,
  albums: albumsReducer,
  authors: authorsReducer,
  home: homeReducer,
  player: playerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
