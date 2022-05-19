import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import { AlbumsActionTypes, AlbumsAction } from '../types/albums';
import { Album } from '../../models/album';
import { Error } from '../../models/response/error';

import AlbumsService from '../../services/albums-service';

import UserService from '../../services/user-service';
import { UserAuthAction } from '../types/user-auth';
import { setUser } from './user-auth';

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

export const setUploadAlbumLoading = (loading: boolean): AlbumsAction => {
  return {
    type: AlbumsActionTypes.SET_UPLOAD_ALBUM_LOADING,
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

export const uploadAlbum =
  (albumName: string, albumImageFile: File, tracksFiles: FileList) =>
  async (
    dispatch: Dispatch<AlbumsAction | UserAuthAction>,
  ): Promise<AxiosResponse<Album> | undefined> => {
    let response;
    try {
      dispatch(setUploadAlbumLoading(true));

      response = await AlbumsService.uploadAlbum(albumName, albumImageFile, tracksFiles);
      const getMeResponse = await UserService.getMe();

      dispatch(setUser(getMeResponse.data));
    } finally {
      dispatch(setUploadAlbumLoading(false));
    }
    return response;
  };

export const deleteAlbum =
  (albumId: string, deleteWithTrack: boolean) =>
  async (dispatch: Dispatch<AlbumsAction | UserAuthAction>) => {
    try {
      dispatch(setAlbumsLoading(true));

      await AlbumsService.deleteAlbum(albumId, deleteWithTrack);
      const getMeResponse = await UserService.getMe();

      dispatch(setUser(getMeResponse.data));
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
