import { User } from '../../models/user';
import { Error } from '../../models/response/error';
import { UserWithLatestMedia } from '../../models/user/user-with-latest-media';

export enum AuthorsActionTypes {
  SET_AUTHORS = 'SET_AUTHORS',
  SET_TOTAL = 'SET_TOTAL',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
  SET_SPECIFIC_AUTHOR = 'SET_SPECIFIC_AUTHOR',
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

interface SetSpecificAuthorAction {
  type: AuthorsActionTypes.SET_SPECIFIC_AUTHOR;
  payload: UserWithLatestMedia;
}

export type AuthorsAction =
  | SetAuthorsAction
  | SetTotalAction
  | SetLoadingAction
  | SetErrorAction
  | SetSpecificAuthorAction;

export interface AuthorsState {
  authors: User[];
  total: number;
  loading: boolean;
  error: Error;
  specificAuthor: UserWithLatestMedia | null;
}
