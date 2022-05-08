import React from 'react';

import { Grid, Typography } from '@mui/material';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';

import { StyledLink, StyledGridItem, StyledIconButton } from './styles';

import { AlbumTrackProps } from './types';
import { routerLinks } from '../../../../router/router-links.enum';

const AlbumTrack: React.FC<AlbumTrackProps> = ({ album, track, hashNumber }) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  const mouseMoveHandler = (): void => {
    setIsHovered(prev => !prev);
  };

  return (
    <StyledGridItem
      onMouseLeave={mouseMoveHandler}
      onMouseEnter={mouseMoveHandler}
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
        <Typography variant="body2">{track.name}</Typography>
        <StyledLink to={`${routerLinks.AUTHORS}/${album?.author?.id}`}>
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
