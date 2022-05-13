import { Error } from '../../models/response/error';
import { UserWithMedia } from '../../models/user/user-with-media';

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

export type UserAuthAction = SetIsAuthAction | SetUserAction | SetLoadingAction | SetErrorAction;

export interface UserAuthState {
  isAuth: boolean;
  user: UserWithMedia | null;
  loading: boolean;
  error: Error;
}
