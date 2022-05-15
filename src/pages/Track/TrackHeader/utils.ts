import { Track } from '../../../models/track';

export const isUserLikedTrackAlready = (
  userLikedTracks: Track[] | undefined,
  trackId: string,
): boolean => {
  if (!userLikedTracks || !trackId) {
    return false;
  }

  const userLikedTracksIds = userLikedTracks.map(t => t.id);
  return userLikedTracksIds.includes(trackId);
};
