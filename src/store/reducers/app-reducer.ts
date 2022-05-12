import { AppState, AppAction, AppActionTypes } from '../types/app';

const initialState: AppState = {
  appLoading: false,
};

export const appReducer = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionTypes.SET_APP_LOADING:
      return { ...state, appLoading: action.payload };
    default:
      return state;
  }
};
