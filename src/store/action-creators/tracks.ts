import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import { TracksAction, TracksActionTypes } from '../types/tracks';
import { Track } from '../../models/track';

import TracksService from '../../services/tracks-service';
import { Error } from '../../models/response/error';

import UserService from '../../services/user-service';
import { setUser } from './user-auth';
import { UserAuthAction } from '../types/user-auth';

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

export const setSpecificTrack = (track: Track): TracksAction => {
  return {
    type: TracksActionTypes.SET_SPECIFIC_TRACK,
    payload: track,
  };
};

export const setTrackCommentOperationLoading = (loading: boolean): TracksAction => {
  return {
    type: TracksActionTypes.SET_TRACK_COMMENT_OPERATION_LOADING,
    payload: loading,
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

export const getTrack = (trackId: string) => async (dispatch: Dispatch<TracksAction>) => {
  try {
    dispatch(setTracksLoading(true));

    const response = await TracksService.getTrack(trackId);

    dispatch(setSpecificTrack(response.data));
    dispatch(setTracksError(null));
  } catch (error: any) {
    dispatch(setTracksError(error.response.data.message));
  } finally {
    dispatch(setTracksLoading(false));
  }
};

export const updateTrack =
  (trackId: string, trackName: string, trackText: string) =>
  async (dispatch: Dispatch<TracksAction>): Promise<AxiosResponse<Track> | undefined> => {
    let response;
    try {
      dispatch(setTracksLoading(true));

      response = await TracksService.updateTrack(trackId, trackName, trackText);

      dispatch(setSpecificTrack(response.data));
      dispatch(setTracksError(null));
    } catch (error: any) {
      dispatch(setTracksError(error.response.data.message));
    } finally {
      dispatch(setTracksLoading(false));
    }
    return response;
  };

export const deleteTrack =
  (trackId: string) => async (dispatch: Dispatch<TracksAction | UserAuthAction>) => {
    try {
      dispatch(setTracksLoading(true));

      await TracksService.deleteTrack(trackId);
      const getMeResponse = await UserService.getMe();

      dispatch(setUser(getMeResponse.data));
      dispatch(setTracksError(null));
    } catch (error: any) {
      dispatch(setTracksError(error.response.data.message));
    } finally {
      dispatch(setTracksLoading(false));
    }
  };

export const toggleLikeTrack =
  (trackId: string) => async (dispatch: Dispatch<TracksAction | UserAuthAction>) => {
    await TracksService.toggleLikeTrack(trackId);

    const getMeResponse = await UserService.getMe();
    dispatch(setUser(getMeResponse.data));
  };

export const addCommentToTrack =
  (trackId: string, commentTex: string) => async (dispatch: Dispatch<TracksAction>) => {
    try {
      dispatch(setTrackCommentOperationLoading(true));

      await TracksService.addCommentToTrack(trackId, commentTex);
      const response = await TracksService.getTrack(trackId);

      dispatch(setSpecificTrack(response.data));
    } finally {
      dispatch(setTrackCommentOperationLoading(false));
    }
  };

export const updateCommentToTrack =
  (trackId: string, commentId: string, commentTex: string) =>
  async (dispatch: Dispatch<TracksAction>) => {
    try {
      dispatch(setTrackCommentOperationLoading(true));

      await TracksService.updateCommentToTrack(trackId, commentId, commentTex);
      const response = await TracksService.getTrack(trackId);

      dispatch(setSpecificTrack(response.data));
    } finally {
      dispatch(setTrackCommentOperationLoading(false));
    }
  };

export const deleteCommentToTrack =
  (trackId: string, commentId: string) => async (dispatch: Dispatch<TracksAction>) => {
    try {
      dispatch(setTrackCommentOperationLoading(true));

      await TracksService.deleteCommentToTrack(trackId, commentId);
      const response = await TracksService.getTrack(trackId);

      dispatch(setSpecificTrack(response.data));
    } finally {
      dispatch(setTrackCommentOperationLoading(false));
    }
  };
