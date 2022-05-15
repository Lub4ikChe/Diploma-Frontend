import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import { AlbumsActionTypes, AlbumsAction } from '../types/albums';
import { Album } from '../../models/album';
import { Error } from '../../models/response/error';

import AlbumsService from '../../services/albums-service';

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

export const setSpecificAlbum = (album: Album): AlbumsAction => {
  return {
    type: AlbumsActionTypes.SET_SPECIFIC_ALBUM,
    payload: album,
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

export const getAlbum = (albumId: string) => async (dispatch: Dispatch<AlbumsAction>) => {
  try {
    dispatch(setAlbumsLoading(true));

    const response = await AlbumsService.getAlbum(albumId);

    dispatch(setSpecificAlbum(response.data));
    dispatch(setAlbumsError(null));
  } catch (error: any) {
    dispatch(setAlbumsError(error.response.data.message));
  } finally {
    dispatch(setAlbumsLoading(false));
  }
};

export const updateAlbum =
  (albumId: string, albumName: string) =>
  async (dispatch: Dispatch<AlbumsAction>): Promise<AxiosResponse<Album> | undefined> => {
    let response;
    try {
      dispatch(setAlbumsLoading(true));

      response = await AlbumsService.updateAlbum(albumId, albumName);

      dispatch(setSpecificAlbum(response.data));
      dispatch(setAlbumsError(null));
    } catch (error: any) {
      dispatch(setAlbumsError(error.response.data.message));
    } finally {
      dispatch(setAlbumsLoading(false));
    }
    return response;
  };
