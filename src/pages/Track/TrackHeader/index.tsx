import React from 'react';
import { Box, Typography } from '@mui/material';

import { StyledIcon } from './styles';

import { TrackHeaderProps } from './types';

const TrackHeader: React.FC<TrackHeaderProps> = ({ track }) => {
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
    </Box>
  );
};

export default TrackHeader;
