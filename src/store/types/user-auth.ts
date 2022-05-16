import { Error } from '../../models/response/error';
import { UserWithMedia } from '../../models/user/user-with-media';

export enum UserAuthActionTypes {
  SET_IS_AUTH = 'SET_IS_AUTH',
  SET_USER = 'SET_USER',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
  SET_SHOW_ACTIVATE_ACCOUNT = 'SET_SHOW_ACTIVATE_ACCOUNT',
}

interface SetIsAuthAction {
  type: UserAuthActionTypes.SET_IS_AUTH;
  payload: boolean;
}

interface SetUserAction {
  type: UserAuthActionTypes.SET_USER;
  payload: UserWithMedia | null;
}

interface SetLoadingAction {
  type: UserAuthActionTypes.SET_LOADING;
  payload: boolean;
}

interface SetErrorAction {
  type: UserAuthActionTypes.SET_ERROR;
  payload: Error;
}

interface SetShowActivateAccountAction {
  type: UserAuthActionTypes.SET_SHOW_ACTIVATE_ACCOUNT;
  payload: boolean;
}

export type UserAuthAction =
  | SetIsAuthAction
  | SetUserAction
  | SetLoadingAction
  | SetErrorAction
  | SetShowActivateAccountAction;

export interface UserAuthState {
  isAuth: boolean;
  user: UserWithMedia | null;
  loading: boolean;
  error: Error;
  showActivateAccount: boolean;
}
