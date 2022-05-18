import React from 'react';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { StyledPlayerWrapper } from './styles';

import { useTypedSelector } from '../../hooks/use-typed-selector';

import TracksService from '../../services/tracks-service';

const Player: React.FC = () => {
  const playerRef = React.createRef<AudioPlayer>();
  const { activeTrack } = useTypedSelector(state => state.player);

  if (!activeTrack) {
    return null;
  }

  const onTrackEnded = (): void => {
    const audio = playerRef?.current?.audio?.current;
    if (audio && audio.currentTime > audio.duration - 1) {
      TracksService.listenTrack(activeTrack.id);
    }
  };

  return (
    <StyledPlayerWrapper>
      <AudioPlayer
        ref={playerRef}
        volume={0.5}
        crossOrigin="anonymous"
        onListen={onTrackEnded}
        autoPlay
        src={activeTrack.audio.url}
      />
    </StyledPlayerWrapper>
  );
};

export default Player;
