import { Track } from '../../../models/track';

export interface TrackHeaderProps {
  track: Track;
  userIsOwner: boolean;
  onEditClick: () => void;
}
