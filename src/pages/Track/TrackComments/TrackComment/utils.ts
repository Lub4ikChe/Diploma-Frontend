import { User } from '../../../../models/user';

export const getIsUserCommentOwner = (user: User | null, commentOwnerId?: string): boolean => {
  if (!user || !commentOwnerId) {
    return false;
  }

  return user.id === commentOwnerId;
};
