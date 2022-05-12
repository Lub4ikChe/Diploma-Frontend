import { Album } from '../../models/album';
import { Error } from '../../models/response/error';

export enum AlbumsActionTypes {
  SET_ALBUMS = 'SET_ALBUMS',
  SET_TOTAL = 'SET_TOTAL',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
}

interface SetAlbumsAction {
  type: AlbumsActionTypes.SET_ALBUMS;
  payload: Album[];
}

interface SetTotalAction {
  type: AlbumsActionTypes.SET_TOTAL;
  payload: number;
}

interface SetLoadingAction {
  type: AlbumsActionTypes.SET_LOADING;
  payload: boolean;
}

interface SetErrorAction {
  type: AlbumsActionTypes.SET_ERROR;
  payload: Error;
}

export type AlbumsAction = SetAlbumsAction | SetTotalAction | SetLoadingAction | SetErrorAction;

export interface AlbumsState {
  albums: Album[];
  total: number;
  loading: boolean;
  error: Error;
}
