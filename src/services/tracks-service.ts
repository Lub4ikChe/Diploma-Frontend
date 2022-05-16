import { AxiosResponse } from 'axios';
import { $api } from '../http';
import { Comment } from '../models/comment';

import { FetchTracksResponse } from '../models/response/tracks-response';
import { Track } from '../models/track';

export default class TracksService {
  static async fetchTracks(
    page = 0,
    limit = 10,
    search = '',
  ): Promise<AxiosResponse<FetchTracksResponse>> {
    return $api.get<FetchTracksResponse>(`track?search=${search}&limit=${limit}&page=${page}`);
  }

  static async getTrack(trackId: string): Promise<AxiosResponse<Track>> {
    return $api.get<Track>(`track/${trackId}`);
  }

  static async updateTrack(
    trackId: string,
    trackName: string,
    trackText: string,
  ): Promise<AxiosResponse<Track>> {
    return $api.put<Track>(`track/${trackId}`, { name: trackName, text: trackText });
  }

  static async deleteTrack(trackId: string): Promise<AxiosResponse<Track>> {
    return $api.delete<Track>(`track/${trackId}`);
  }

  static async toggleLikeTrack(trackId: string): Promise<AxiosResponse<Track[]>> {
    return $api.put<Track[]>('user/liked-track', { trackId });
  }

  static async addCommentToTrack(
    trackId: string,
    commentText: string,
  ): Promise<AxiosResponse<Comment>> {
    return $api.post<Comment>(`track/${trackId}/comment`, { text: commentText });
  }

  static async updateCommentToTrack(
    trackId: string,
    commentId: string,
    commentText: string,
  ): Promise<AxiosResponse<Comment>> {
    return $api.put<Comment>(`track/${trackId}/comment/${commentId}`, { text: commentText });
  }

  static async deleteCommentToTrack(
    trackId: string,
    commentId: string,
  ): Promise<AxiosResponse<Comment>> {
    return $api.delete<Comment>(`track/${trackId}/comment/${commentId}`);
  }
}
