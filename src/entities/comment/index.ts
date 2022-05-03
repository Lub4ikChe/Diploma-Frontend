import { User } from '../user';

export interface Comment {
  id: string;
  text: string;
  commentedAt: Date;
  author: Partial<User>;
}
