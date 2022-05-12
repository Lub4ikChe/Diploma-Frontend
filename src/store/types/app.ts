export enum AppActionTypes {
  SET_APP_LOADING = 'SET_APP_LOADING',
}

interface SetAppLoadingAction {
  type: AppActionTypes.SET_APP_LOADING;
  payload: boolean;
}

export type AppAction = SetAppLoadingAction;

export interface AppState {
  appLoading: boolean;
}
