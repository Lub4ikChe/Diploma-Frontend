import { AxiosResponse } from 'axios';
import { $api } from '../http';

import { FetchAlbumsResponse } from '../models/response/albums-response';

export default class AlbumsService {
  static async fetchAlbums(
    page = 0,
    limit = 10,
    search = '',
  ): Promise<AxiosResponse<FetchAlbumsResponse>> {
    return $api.get<FetchAlbumsResponse>(`album?search=${search}&limit=${limit}&page=${page}`);
  }
}
