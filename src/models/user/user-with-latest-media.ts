import { User } from './index';
import { Track } from '../track';
import { Album } from '../album';

export interface UserWithLatestMedia extends User {
  uploadedTracks: Track[];
  uploadedAlbums: Album[];
}
