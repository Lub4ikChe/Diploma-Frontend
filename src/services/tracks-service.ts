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

  static async uploadTrack(
    trackName: string,
    trackText: string,
    trackImageFile: File,
    trackAudioFile: File,
  ): Promise<AxiosResponse<Track>> {
    const formData = new FormData();
    formData.append('name', trackName);
    formData.append('text', trackText);
    formData.append('image', trackImageFile);
    formData.append('audio', trackAudioFile);
    return $api.post<Track>('track', formData);
  }

  static async deleteTrack(trackId: string): Promise<AxiosResponse<Track>> {
    return $api.delete<Track>(`track/${trackId}`);
  }

  static async toggleLikeTrack(trackId: string): Promise<AxiosResponse<Track[]>> {
    return $api.put<Track[]>('user/liked-track', { trackId });
  }

  static async listenTrack(trackId: string): Promise<AxiosResponse<Track[]>> {
    return $api.post<Track[]>(`track/${trackId}/listen`);
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

  static async downloadTrack(track: Track): Promise<void> {
    const response = await fetch(`track/${track.id}/download`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    if (response.status === 200) {
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = track.audio.originalName;
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  }
}
