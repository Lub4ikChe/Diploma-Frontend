import { Dispatch } from 'redux';

import { AlbumsActionTypes, AlbumsAction } from '../types/albums';
import { Album } from '../../models/album';

import AlbumsService from '../../services/albums-service';
import { Error } from '../../models/response/error';

export const setAlbums = (albums: Album[]): AlbumsAction => {
  return {
    type: AlbumsActionTypes.SET_ALBUMS,
    payload: albums,
  };
};

export const setAlbumsTotal = (total: number): AlbumsAction => {
  return {
    type: AlbumsActionTypes.SET_TOTAL,
    payload: total,
  };
};

export const setAlbumsLoading = (loading: boolean): AlbumsAction => {
  return {
    type: AlbumsActionTypes.SET_LOADING,
    payload: loading,
  };
};

export const setAlbumsError = (error: Error): AlbumsAction => {
  return {
    type: AlbumsActionTypes.SET_ERROR,
    payload: error,
  };
};

export const getAlbums =
  (page = 0, limit = 10, search = '') =>
  async (dispatch: Dispatch<AlbumsAction>) => {
    try {
      dispatch(setAlbumsLoading(true));

      const response = await AlbumsService.fetchAlbums(page, limit, search);

      dispatch(setAlbums(response.data[0]));
      dispatch(setAlbumsTotal(response.data[1]));
      dispatch(setAlbumsError(null));
    } catch (error: any) {
      dispatch(setAlbumsError(error.response.data.message));
    } finally {
      dispatch(setAlbumsLoading(false));
    }
  };
