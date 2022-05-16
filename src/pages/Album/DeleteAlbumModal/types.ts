import { Album } from '../../../models/album';

export interface DeleteAlbumModalProps {
  open: boolean;
  onClose: () => void;
  album: Album;
}
