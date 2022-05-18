import { PlayerAction, PlayerActionTypes } from '../types/player';
import { Track } from '../../models/track';

export const setActiveTrack = (active: Track): PlayerAction => {
  return {
    type: PlayerActionTypes.SET_ACTIVE_TRACK,
    payload: active,
  };
};
