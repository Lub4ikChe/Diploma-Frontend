import { AppAction, AppActionTypes } from '../types/app';

export const setAppLoading = (loading: boolean): AppAction => {
  return {
    type: AppActionTypes.SET_APP_LOADING,
    payload: loading,
  };
};
