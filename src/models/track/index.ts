import { Album } from '../album';
import { Attachment } from '../attachment';
import { Comment } from '../comment';
import { User } from '../user';

export interface Track {
  id: string;
  name: string;
  text: string;
  listensCount: number;
  uploadedAt: Date;
  uploadedBy: Partial<User>;
  audio: Attachment;
  image: Attachment;
  comments: Comment[];
  album?: Partial<Album>;
}
