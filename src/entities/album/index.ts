import { Attachment } from '../attachment';
import { Track } from '../track';
import { User } from '../user';

export interface Album {
  id: string;
  name: string;
  listensCount: number;
  image: Attachment;
  author: Partial<User>;
  tracks: Partial<Track>[];
}
