import React from 'react';

import { Grid, Box } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

import { StyledGrid, StyledLink, StyledIconButton } from './styles';

import { TrackListItemProps } from './types';
import { routerLinks } from '../../../router/router-links.enum';

const TrackListItems: React.FC<TrackListItemProps> = ({ track, hashNumber }) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  const mouseMoveHandler = (): void => {
    setIsHovered(prev => !prev);
  };

  return (
    <StyledGrid
      onMouseLeave={mouseMoveHandler}
      onMouseEnter={mouseMoveHandler}
      container
      alignItems="center"
      p={1}
      pl={3}
    >
      <Grid item xs={0.6}>
        {isHovered ? (
          <StyledIconButton color="inherit">
            <PlayArrowRoundedIcon />
          </StyledIconButton>
        ) : (
          hashNumber
        )}
      </Grid>
      <Grid item xs={4.4}>
        <Box display="flex">
          <Box
            component="img"
            alignSelf="center"
            height={40}
            width={40}
            src={track.image.url}
            alt={track.name}
          />
          <Box ml={2}>
            {track.name}
            <Box>
              {track.uploadedBy.information ? (
                <StyledLink to={`${routerLinks.AUTHORS}/${track.uploadedBy.id}}`}>
                  {track.uploadedBy.information.name}
                </StyledLink>
              ) : (
                'N/A'
              )}
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={3}>
        {track.album ? (
          <StyledLink to={`${routerLinks.TRACKS}/${track.album.id}}`}>
            {track.album.name}
          </StyledLink>
        ) : (
          '-'
        )}
      </Grid>
      <Grid item xs={3}>
        {track.uploadedAt.toLocaleDateString()}
      </Grid>
      <Grid textAlign="center" item xs={1}>
        {track.listensCount}
      </Grid>
    </StyledGrid>
  );
};

export default TrackListItems;
