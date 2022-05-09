import React from 'react';

import { Typography } from '@mui/material';
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledIcon,
  StyledAccordionDetails,
} from './styles';

import { TrackTextProps } from './types';

const TrackText: React.FC<TrackTextProps> = ({ text }) => {
  return (
    <StyledAccordion>
      <StyledAccordionSummary expandIcon={<StyledIcon />}>Show track's text</StyledAccordionSummary>
      <StyledAccordionDetails>
        <Typography>{text}</Typography>
      </StyledAccordionDetails>
    </StyledAccordion>
  );
};

export default TrackText;
