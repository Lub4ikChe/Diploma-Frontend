import { AlbumsState, AlbumsActionTypes, AlbumsAction } from '../types/albums';

const initialState: AlbumsState = {
  albums: [],
  total: 0,
  error: null,
  loading: false,
};

export const albumsReducer = (state = initialState, action: AlbumsAction): AlbumsState => {
  switch (action.type) {
    case AlbumsActionTypes.SET_ALBUMS:
      return { ...state, albums: action.payload };
    case AlbumsActionTypes.SET_TOTAL:
      return { ...state, total: action.payload };
    case AlbumsActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case AlbumsActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};