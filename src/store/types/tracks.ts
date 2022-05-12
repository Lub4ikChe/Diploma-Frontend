import { Track } from '../../models/track';
import { Error } from '../../models/response/error';

export enum TracksActionTypes {
  SET_TRACKS = 'SET_TRACKS',
  SET_TOTAL = 'SET_TOTAL',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
}

interface SetTracksAction {
  type: TracksActionTypes.SET_TRACKS;
  payload: Track[];
}

interface SetTotalAction {
  type: TracksActionTypes.SET_TOTAL;
  payload: number;
}

interface SetLoadingAction {
  type: TracksActionTypes.SET_LOADING;
  payload: boolean;
}

interface SetErrorAction {
  type: TracksActionTypes.SET_ERROR;
  payload: Error;
}

export type TracksAction = SetTracksAction | SetTotalAction | SetLoadingAction | SetErrorAction;

export interface TracksState {
  tracks: Track[];
  total: number;
  loading: boolean;
  error: Error;
}
