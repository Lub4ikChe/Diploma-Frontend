import { Track } from '../../models/track';
import { Error } from '../../models/response/error';

export enum TracksActionTypes {
  SET_TRACKS = 'SET_TRACKS',
  SET_TOTAL = 'SET_TOTAL',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
  SET_SPECIFIC_TRACK = 'SET_SPECIFIC_TRACK',
  SET_TRACK_COMMENT_OPERATION_LOADING = 'SET_TRACK_COMMENT_OPERATION_LOADING',
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

interface SetSpecificTrackAction {
  type: TracksActionTypes.SET_SPECIFIC_TRACK;
  payload: Track;
}

interface SetTrackCommentOperationLoadingAction {
  type: TracksActionTypes.SET_TRACK_COMMENT_OPERATION_LOADING;
  payload: boolean;
}

export type TracksAction =
  | SetTracksAction
  | SetTotalAction
  | SetLoadingAction
  | SetErrorAction
  | SetSpecificTrackAction
  | SetTrackCommentOperationLoadingAction;

export interface TracksState {
  tracks: Track[];
  total: number;
  loading: boolean;
  error: Error;
  specificTrack: Track | null;
  commentOperationLoading: boolean;
}
