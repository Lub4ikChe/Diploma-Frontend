import { User } from './index';
import { Track } from '../track';
import { Album } from '../album';

export interface UserWithMedia extends User {
  likedTracks: Track[];
  uploadedTracks: Track[];
  uploadedAlbums: Album[];
}
