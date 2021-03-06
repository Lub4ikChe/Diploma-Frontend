import { AxiosResponse } from 'axios';
import { $api } from '../http';
import { Album } from '../models/album';

import { FetchAlbumsResponse } from '../models/response/albums-response';

export default class AlbumsService {
  static async fetchAlbums(
    page = 0,
    limit = 10,
    search = '',
  ): Promise<AxiosResponse<FetchAlbumsResponse>> {
    return $api.get<FetchAlbumsResponse>(`album?search=${search}&limit=${limit}&page=${page}`);
  }

  static async deleteAlbum(
    albumId: string,
    deleteWithTrack: boolean,
  ): Promise<AxiosResponse<Album>> {
    return $api.delete<Album>(`album/${albumId}`, { data: { deleteWithTrack } });
  }

  static async getAlbum(albumId: string): Promise<AxiosResponse<Album>> {
    return $api.get<Album>(`album/${albumId}`);
  }

  static async updateAlbum(albumId: string, albumName: string): Promise<AxiosResponse<Album>> {
    return $api.put<Album>(`album/${albumId}`, {
      name: albumName,
    });
  }

  static async uploadAlbum(
    albumName: string,
    imageFile: File,
    tracksFiles: FileList,
  ): Promise<AxiosResponse<Album>> {
    const formData = new FormData();
    formData.append('name', albumName);
    formData.append('image', imageFile);
    Array.from(tracksFiles).forEach(file => {
      formData.append('audio', file);
    });
    return $api.post<Album>('album', formData);
  }
}
