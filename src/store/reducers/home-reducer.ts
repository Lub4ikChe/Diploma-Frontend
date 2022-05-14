import { HomeState, HomeAction, HomeActionTypes } from '../types/home';

const initialState: HomeState = {
  homeItems: null,
  loading: false,
  error: null,
};

export const homeReducer = (state = initialState, action: HomeAction): HomeState => {
  switch (action.type) {
    case HomeActionTypes.SET_HOME_ITEMS:
      return { ...state, homeItems: action.payload };
    case HomeActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case HomeActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
