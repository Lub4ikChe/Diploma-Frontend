import { PlayerActionTypes, PlayerState, PlayerAction } from '../types/player';

const initialState: PlayerState = {
  activeTrack: null,
};

export const playerReducer = (state = initialState, action: PlayerAction): PlayerState => {
  switch (action.type) {
    case PlayerActionTypes.SET_ACTIVE_TRACK:
      return { ...state, activeTrack: action.payload };
    default:
      return state;
  }
};
