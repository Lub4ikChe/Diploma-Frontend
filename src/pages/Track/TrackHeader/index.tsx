import React from 'react';
import { Box, Typography, Tooltip } from '@mui/material';

import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

import { StyledIcon, StyledIconButton, StyledLikedIconProps } from './styles';

import { TrackHeaderProps } from './types';

import { isUserLikedTrackAlready } from './utils';

import { useTypedSelector } from '../../../hooks/use-typed-selector';
import { useActions } from '../../../hooks/use-actions';

const TrackHeader: React.FC<TrackHeaderProps> = ({ track, userIsOwner, onEditClick }) => {
  const { user } = useTypedSelector(state => state.userAuth);
  const isLikedAlready = isUserLikedTrackAlready(user?.likedTracks, track.id);
  const [toggleLiked, setToggleLiked] = React.useState<boolean>(isLikedAlready);

  const { toggleLikeTrack } = useActions();

  const onToggleLikeHandle = (): void => {
    setToggleLiked(prev => !prev);
    toggleLikeTrack(track.id);
  };

  const LikeIcon = toggleLiked ? (
    <FavoriteRoundedIcon style={StyledLikedIconProps} />
  ) : (
    <FavoriteBorderRoundedIcon style={StyledLikedIconProps} />
  );

  const likeIconButtonText = toggleLiked ? 'Unlike track' : 'Like track';
  const TooltipIconText = userIsOwner ? 'Edit track' : likeIconButtonText;
  const onIconClick = userIsOwner ? onEditClick : onToggleLikeHandle;

  return (
    <Box display="flex">
      <Box
        component="img"
        height={200}
        width={200}
        border="1px solid #1a76d2"
        src={track.image?.url}
        alt={track.name}
        crossOrigin="anonymous"
      />
      <Box ml={2} display="flex" flexDirection="column">
        <Typography variant="h6">Track Name:</Typography>
        <Typography variant="h5">{track.name}</Typography>
        <Typography variant="h6">
          Listens Count <StyledIcon />:
        </Typography>
        <Typography variant="h6">{track.listensCount}</Typography>
        <Typography variant="h6">Uploaded at:</Typography>
        <Typography variant="h6">{new Date(track.uploadedAt).toLocaleDateString()}</Typography>
      </Box>
      <Box ml="auto">
        <Tooltip placement="top" arrow title={TooltipIconText}>
          <StyledIconButton onClick={onIconClick}>
            {userIsOwner ? <EditRoundedIcon /> : LikeIcon}
          </StyledIconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default TrackHeader;
