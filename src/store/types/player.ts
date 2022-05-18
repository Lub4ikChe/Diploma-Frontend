import { Track } from '../../models/track';

export enum PlayerActionTypes {
  SET_ACTIVE_TRACK = 'SET_ACTIVE_TRACK',
}

interface SetActiveTrackAction {
  type: PlayerActionTypes.SET_ACTIVE_TRACK;
  payload: Track;
}

export type PlayerAction = SetActiveTrackAction;

export interface PlayerState {
  activeTrack: Track | null;
}
