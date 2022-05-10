import React from 'react';
import { Box, Typography, Tooltip } from '@mui/material';

import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

import { StyledIcon, StyledIconButton, StyledLikedIconProps } from './styles';

import { TrackHeaderProps } from './types';

const TrackHeader: React.FC<TrackHeaderProps> = ({ track }) => {
  const [toggleLiked, setToggleLiked] = React.useState<boolean>(false);
  const onToggleLikeHandle = (): void => setToggleLiked(prev => !prev);

  return (
    <Box display="flex">
      <Box
        component="img"
        height={200}
        width={200}
        border="1px solid #1a76d2"
        src={track.image?.url}
        alt={track.name}
      />
      <Box ml={2} display="flex" flexDirection="column">
        <Typography variant="h6">Track Name:</Typography>
        <Typography variant="h5">{track.name}</Typography>
        <Typography variant="h6">
          Listens Count <StyledIcon />:
        </Typography>
        <Typography variant="h6">{track.listensCount}</Typography>
        <Typography variant="h6">Uploaded at:</Typography>
        <Typography variant="h6">{track.uploadedAt.toLocaleDateString()}</Typography>
      </Box>
      <Box ml="auto">
        <Tooltip placement="top" arrow title="Like track">
          <StyledIconButton onClick={onToggleLikeHandle}>
            {toggleLiked ? (
              <FavoriteRoundedIcon style={StyledLikedIconProps} />
            ) : (
              <FavoriteBorderRoundedIcon style={StyledLikedIconProps} />
            )}
          </StyledIconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default TrackHeader;
