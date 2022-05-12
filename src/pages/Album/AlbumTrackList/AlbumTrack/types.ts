import { Album } from '../../../../models/album';
import { Track } from '../../../../models/track';

export interface AlbumTrackProps {
  album: Partial<Album>;
  track: Partial<Track>;
  hashNumber: number;
}
