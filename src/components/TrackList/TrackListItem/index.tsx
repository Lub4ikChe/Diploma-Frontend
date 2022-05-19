import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Grid, Box } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

import { StyledGrid, StyledLink, StyledIconButton } from './styles';
import SnackBar from '../../SnackBar';

import { TrackListItemProps } from './types';
import { routerLinks } from '../../../router/router-links.enum';

import { useActions } from '../../../hooks/use-actions';
import { useTypedSelector } from '../../../hooks/use-typed-selector';

const TrackListItems: React.FC<TrackListItemProps> = ({ track, hashNumber }) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const [showNotLogInAlert, setShowNotLogInAlert] = React.useState<boolean>(false);

  const navigate = useNavigate();
  const { isAuth } = useTypedSelector(state => state.userAuth);
  const { setActiveTrack } = useActions();

  const hideNotLogInAlert = (): void => setShowNotLogInAlert(false);

  const mouseMoveHandler = (): void => {
    setIsHovered(prev => !prev);
  };

  const stopPropagationOnClick = (event: React.MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
  };

  const onTrackLinkOrImageCLick = (event: React.MouseEvent<HTMLElement>): void => {
    stopPropagationOnClick(event);
    if (!isAuth) {
      setShowNotLogInAlert(true);
    } else {
      navigate(`${routerLinks.TRACKS}/${track.id}`);
    }
  };

  const onTrackAlbumCLick = (event: React.MouseEvent<HTMLElement>): void => {
    stopPropagationOnClick(event);
    if (!isAuth) {
      setShowNotLogInAlert(true);
    } else {
      navigate(`${routerLinks.ALBUMS}/${track?.album?.id}`);
    }
  };

  const onPlayClick = (): void => {
    setActiveTrack(track);
  };

  return (
    <StyledGrid
      onMouseLeave={mouseMoveHandler}
      onMouseEnter={mouseMoveHandler}
      onClick={onPlayClick}
      container
      alignItems="center"
      p={1}
      pl={3}
    >
      <SnackBar
        open={showNotLogInAlert}
        onClose={hideNotLogInAlert}
        text="Please login in order to open this page"
        severity="warning"
      />
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
            crossOrigin="anonymous"
            onClick={onTrackLinkOrImageCLick}
            style={{ cursor: 'pointer' }}
          />
          <Box ml={2} onClick={stopPropagationOnClick}>
            <StyledLink onClick={onTrackLinkOrImageCLick}>{track.name}</StyledLink>
            <Box>
              {track.uploadedBy.information ? (
                <StyledLink onClick={onTrackLinkOrImageCLick}>
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
          <StyledLink onClick={onTrackAlbumCLick}>{track.album.name}</StyledLink>
        ) : (
          '-'
        )}
      </Grid>
      <Grid item xs={3}>
        {new Date(track.uploadedAt).toLocaleDateString()}
      </Grid>
      <Grid textAlign="center" item xs={1}>
        {track.listensCount}
      </Grid>
    </StyledGrid>
  );
};

export default TrackListItems;
