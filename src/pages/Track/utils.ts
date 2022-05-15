import { User } from '../../models/user';

export const getIsUserTrackOwner = (user: User | null, trackAuthor?: string): boolean => {
  if (!user || !trackAuthor) {
    return false;
  }

  return user.id === trackAuthor;
};
