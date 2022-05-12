import { TracksState, TracksActionTypes, TracksAction } from '../types/tracks';

const initialState: TracksState = {
  tracks: [],
  total: 0,
  error: null,
  loading: false,
};

export const tracksReducer = (state = initialState, action: TracksAction): TracksState => {
  switch (action.type) {
    case TracksActionTypes.SET_TRACKS:
      return { ...state, tracks: action.payload };
    case TracksActionTypes.SET_TOTAL:
      return { ...state, total: action.payload };
    case TracksActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case TracksActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
