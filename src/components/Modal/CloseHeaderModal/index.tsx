import React from 'react';

import { Box, Typography } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import { CloseModalHeaderProps } from './types';
import { StyledIconButton } from './styles';

const CloseHeaderModal: React.FC<CloseModalHeaderProps> = ({ label, closeModal }) => {
  return (
    <Box display="flex" justifyContent="space-between" pb={1}>
      <Typography variant="h6" component="h2">
        {label}
      </Typography>
      <StyledIconButton color="inherit" onClick={closeModal}>
        <CloseRoundedIcon />
      </StyledIconButton>
    </Box>
  );
};

export default CloseHeaderModal;
