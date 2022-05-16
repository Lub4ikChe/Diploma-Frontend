import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Tooltip } from '@mui/material';

import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

import {
  StyledIcon,
  StyledEditOrLikeIconButton,
  StyledIconProps,
  StyledDeleteOrDownloadIconButton,
} from './styles';

import { TrackHeaderProps } from './types';

import { isUserLikedTrackAlready } from './utils';

import { useTypedSelector } from '../../../hooks/use-typed-selector';
import { useActions } from '../../../hooks/use-actions';

import { routerLinks } from '../../../router/router-links.enum';

const TrackHeader: React.FC<TrackHeaderProps> = ({ track, userIsOwner, onEditClick }) => {
  const { user } = useTypedSelector(state => state.userAuth);
  const isLikedAlready = isUserLikedTrackAlready(user?.likedTracks, track.id);
  const [toggleLiked, setToggleLiked] = React.useState<boolean>(isLikedAlready);

  const navigate = useNavigate();

  const { toggleLikeTrack, deleteTrack } = useActions();

  const onToggleLikeHandle = (): void => {
    setToggleLiked(prev => !prev);
    toggleLikeTrack(track.id);
  };

  const onDeleteTrackClick = (): void => {
    deleteTrack(track.id);
    navigate(routerLinks.MY_TRACKS);
  };

  const LikeIcon = toggleLiked ? (
    <FavoriteRoundedIcon style={StyledIconProps} />
  ) : (
    <FavoriteBorderRoundedIcon style={StyledIconProps} />
  );

  const likeIconButtonText = toggleLiked ? 'Unlike track' : 'Like track';
  const tooltipEditOrLikeIconText = userIsOwner ? 'Edit track' : likeIconButtonText;
  const onEditOrLikeIconClick = userIsOwner ? onEditClick : onToggleLikeHandle;

  const tooltipDeleteOrDownloadIconText = userIsOwner ? 'Delete track' : 'Download track';
  const onEditOrDownloadIconClick = userIsOwner ? onDeleteTrackClick : () => null;

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
        <Tooltip placement="top" arrow title={tooltipDeleteOrDownloadIconText}>
          <StyledDeleteOrDownloadIconButton onClick={onEditOrDownloadIconClick}>
            {userIsOwner ? (
              <DeleteForeverRoundedIcon color="error" style={StyledIconProps} />
            ) : (
              <DownloadRoundedIcon style={StyledIconProps} />
            )}
          </StyledDeleteOrDownloadIconButton>
        </Tooltip>
        <Tooltip placement="top" arrow title={tooltipEditOrLikeIconText}>
          <StyledEditOrLikeIconButton onClick={onEditOrLikeIconClick}>
            {userIsOwner ? <EditRoundedIcon /> : LikeIcon}
          </StyledEditOrLikeIconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default TrackHeader;
