import { AlbumsState, AlbumsActionTypes, AlbumsAction } from '../types/albums';

const initialState: AlbumsState = {
  albums: [],
  total: 0,
  error: null,
  loading: false,
  uploadAlbumLoading: false,
  specificAlbum: null,
};

export const albumsReducer = (state = initialState, action: AlbumsAction): AlbumsState => {
  switch (action.type) {
    case AlbumsActionTypes.SET_ALBUMS:
      return { ...state, albums: action.payload };
    case AlbumsActionTypes.SET_TOTAL:
      return { ...state, total: action.payload };
    case AlbumsActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case AlbumsActionTypes.SET_UPLOAD_ALBUM_LOADING:
      return { ...state, uploadAlbumLoading: action.payload };
    case AlbumsActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    case AlbumsActionTypes.SET_SPECIFIC_ALBUM:
      return { ...state, specificAlbum: action.payload };
    default:
      return state;
  }
};
