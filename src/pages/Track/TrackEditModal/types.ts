import { Track } from '../../../models/track';

export interface TrackEditModalProps {
  open: boolean;
  onClose: () => void;
  track: Track;
}
