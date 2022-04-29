import React from 'react';

import { Box } from '@mui/material';
import AudiotrackRoundedIcon from '@mui/icons-material/AudiotrackRounded';

import { StyledTitle } from './styles';

const LogoTitle: React.FC = () => {
  return (
    <Box>
      <StyledTitle mb={2} variant="h5">
        <AudiotrackRoundedIcon color="primary" /> Music platform{' '}
        <AudiotrackRoundedIcon color="primary" />
      </StyledTitle>
    </Box>
  );
};

export default LogoTitle;
