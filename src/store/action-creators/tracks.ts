import { Dispatch } from 'redux';

import { TracksAction, TracksActionTypes } from '../types/tracks';
import { Track } from '../../models/track';

import TracksService from '../../services/tracks-service';
import { Error } from '../../models/response/error';

export const setTracks = (tracks: Track[]): TracksAction => {
  return {
    type: TracksActionTypes.SET_TRACKS,
    payload: tracks,
  };
};

export const setTracksTotal = (total: number): TracksAction => {
  return {
    type: TracksActionTypes.SET_TOTAL,
    payload: total,
  };
};

export const setTracksLoading = (loading: boolean): TracksAction => {
  return {
    type: TracksActionTypes.SET_LOADING,
    payload: loading,
  };
};

export const setTracksError = (error: Error): TracksAction => {
  return {
    type: TracksActionTypes.SET_ERROR,
    payload: error,
  };
};

export const getTracks =
  (page = 0, limit = 10, search = '') =>
  async (dispatch: Dispatch<TracksAction>) => {
    try {
      dispatch(setTracksLoading(true));

      const response = await TracksService.fetchTracks(page, limit, search);

      dispatch(setTracks(response.data[0]));
      dispatch(setTracksTotal(response.data[1]));
      dispatch(setTracksError(null));
    } catch (error: any) {
      dispatch(setTracksError(error.response.data.message));
    } finally {
      dispatch(setTracksLoading(false));
    }
  };
