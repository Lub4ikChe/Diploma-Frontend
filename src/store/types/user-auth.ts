import { User } from '../../models/user';

export enum UserAuthActionTypes {
  SET_IS_AUTH = 'SET_IS_AUTH',
  SET_USER = 'SET_USER',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
}

interface SetIsAuthAction {
  type: UserAuthActionTypes.SET_IS_AUTH;
  payload: boolean;
}

interface SetUserAction {
  type: UserAuthActionTypes.SET_USER;
  payload: User | null;
}

interface SetLoadingAction {
  type: UserAuthActionTypes.SET_LOADING;
  payload: boolean;
}

interface SetErrorAction {
  type: UserAuthActionTypes.SET_ERROR;
  payload: null | string | string[];
}

export type UserAuthAction = SetIsAuthAction | SetUserAction | SetLoadingAction | SetErrorAction;

export interface UserAuthState {
  isAuth: boolean;
  user: User | null;
  loading: boolean;
  error: null | string | string[];
}
