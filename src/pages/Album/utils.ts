import { UserWithMedia } from '../../models/user/user-with-media';

export const getIsUserOwner = (user: UserWithMedia | null, albumId?: string): boolean => {
  if (!user || !user?.uploadedAlbums) {
    return false;
  }

  return user.uploadedAlbums.map(a => a.id).includes(albumId || '');
};
