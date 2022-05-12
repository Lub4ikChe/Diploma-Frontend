import { User } from '../../models/user';
import { Error } from '../../models/response/error';

export enum AuthorsActionTypes {
  SET_AUTHORS = 'SET_AUTHORS',
  SET_TOTAL = 'SET_TOTAL',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
}

interface SetAuthorsAction {
  type: AuthorsActionTypes.SET_AUTHORS;
  payload: User[];
}

interface SetTotalAction {
  type: AuthorsActionTypes.SET_TOTAL;
  payload: number;
}

interface SetLoadingAction {
  type: AuthorsActionTypes.SET_LOADING;
  payload: boolean;
}

interface SetErrorAction {
  type: AuthorsActionTypes.SET_ERROR;
  payload: Error;
}

export type AuthorsAction = SetAuthorsAction | SetTotalAction | SetLoadingAction | SetErrorAction;

export interface AuthorsState {
  authors: User[];
  total: number;
  loading: boolean;
  error: Error;
}
