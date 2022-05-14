import { HomeItems } from '../../models/home';
import { Error } from '../../models/response/error';

export enum HomeActionTypes {
  SET_HOME_ITEMS = 'SET_HOME_ITEMS',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
}

interface SetHomeItemsAction {
  type: HomeActionTypes.SET_HOME_ITEMS;
  payload: HomeItems;
}

interface SetLoadingAction {
  type: HomeActionTypes.SET_LOADING;
  payload: boolean;
}

interface SetErrorAction {
  type: HomeActionTypes.SET_ERROR;
  payload: Error;
}

export type HomeAction = SetHomeItemsAction | SetLoadingAction | SetErrorAction;

export interface HomeState {
  homeItems: HomeItems | null;
  loading: boolean;
  error: Error;
}
