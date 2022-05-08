import { Album } from '../../../../entities/album';
import { Track } from '../../../../entities/track';

export interface AlbumTrackProps {
  album: Partial<Album>;
  track: Partial<Track>;
  hashNumber: number;
}
