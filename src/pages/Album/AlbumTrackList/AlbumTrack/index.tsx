import React from 'react';

import { Grid } from '@mui/material';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';

import { StyledLink, StyledGridItem, StyledIconButton, StyledTrackName } from './styles';

import { AlbumTrackProps } from './types';
import { Track } from '../../../../models/track';

import { routerLinks } from '../../../../router/router-links.enum';

import { useActions } from '../../../../hooks/use-actions';

const AlbumTrack: React.FC<AlbumTrackProps> = ({ album, track, hashNumber }) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  const { setActiveTrack } = useActions();

  const onPlayClick = (): void => {
    setActiveTrack(track as Track);
  };

  const mouseMoveHandler = (): void => {
    setIsHovered(prev => !prev);
  };

  const stopPropagationOnClick = (event: React.MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
  };

  return (
    <StyledGridItem
      onMouseLeave={mouseMoveHandler}
      onMouseEnter={mouseMoveHandler}
      onClick={onPlayClick}
      p={1}
      item
      container
      alignItems="center"
    >
      <Grid item xs={0.7}>
        {isHovered ? (
          <StyledIconButton color="inherit">
            <PlayCircleRoundedIcon />
          </StyledIconButton>
        ) : (
          hashNumber
        )}
      </Grid>
      <Grid item xs={10.3}>
        <StyledTrackName onClick={stopPropagationOnClick} variant="body2">
          {track.name}
        </StyledTrackName>
        <StyledLink
          to={`${routerLinks.AUTHORS}/${album?.author?.id}`}
          onClick={stopPropagationOnClick}
        >
          {album?.author?.information?.name || 'N/A'}{' '}
        </StyledLink>
      </Grid>
      <Grid textAlign="center" item xs={1}>
        {track.listensCount}
      </Grid>
    </StyledGridItem>
  );
};

export default AlbumTrack;
