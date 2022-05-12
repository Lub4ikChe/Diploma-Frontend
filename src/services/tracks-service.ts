import { AxiosResponse } from 'axios';
import { $api } from '../http';

import { FetchTracksResponse } from '../models/response/tracks-response';

export default class TracksService {
  static async fetchTracks(
    page = 0,
    limit = 10,
    search = '',
  ): Promise<AxiosResponse<FetchTracksResponse>> {
    return $api.get<FetchTracksResponse>(`track?search=${search}&limit=${limit}&page=${page}`);
  }
}
