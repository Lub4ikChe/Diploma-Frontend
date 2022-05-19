import React from 'react';

import { Box, Grid, Hidden } from '@mui/material';
import StepperHeader from './StepperHeader';

import { StepperWrapperProps } from './types';

const StepperWrapper: React.FC<StepperWrapperProps> = ({ activeStep, children }) => {
  return (
    <Grid container direction="column" mt={2}>
      <Hidden only="xs">
        <StepperHeader activeStep={activeStep} orientation="horizontal" />
      </Hidden>
      <Hidden only={['sm', 'md', 'lg', 'xl']}>
        <StepperHeader activeStep={activeStep} orientation="vertical" />
      </Hidden>
      <Box mt={2} p="0 8px">
        {children}
      </Box>
    </Grid>
  );
};

export default StepperWrapper;
