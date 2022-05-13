import { Album } from '../../../models/album';

export interface AlbumEditModalProps {
  open: boolean;
  onClose: () => void;
  album: Album;
}
