import { AuthorsState, AuthorsAction, AuthorsActionTypes } from '../types/authors';

const initialState: AuthorsState = {
  authors: [],
  total: 0,
  error: null,
  loading: false,
  specificAuthor: null,
};

export const authorsReducer = (state = initialState, action: AuthorsAction): AuthorsState => {
  switch (action.type) {
    case AuthorsActionTypes.SET_AUTHORS:
      return { ...state, authors: action.payload };
    case AuthorsActionTypes.SET_TOTAL:
      return { ...state, total: action.payload };
    case AuthorsActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case AuthorsActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    case AuthorsActionTypes.SET_SPECIFIC_AUTHOR:
      return { ...state, specificAuthor: action.payload };
    default:
      return state;
  }
};
