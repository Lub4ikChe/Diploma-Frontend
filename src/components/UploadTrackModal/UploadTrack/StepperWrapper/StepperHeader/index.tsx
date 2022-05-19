import React from 'react';
import { Step, Stepper, StepLabel, Typography } from '@mui/material';

import { StepperHeaderProps } from './types';
import { steps } from './data';

const StepperHeader: React.FC<StepperHeaderProps> = ({ activeStep, orientation }) => {
  return (
    <Stepper activeStep={activeStep} orientation={orientation}>
      {steps.map((step, index) => (
        <Step key={step} completed={activeStep > index}>
          <StepLabel>
            <Typography color="primary" fontWeight={600}>
              {step}
            </Typography>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepperHeader;
