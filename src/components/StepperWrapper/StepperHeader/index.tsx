import React from 'react';
import { Step, Stepper, StepLabel, Typography } from '@mui/material';

import { StepperHeaderProps } from './types';
import { steps } from './data';

const StepperHeader: React.FC<StepperHeaderProps> = ({ activeStep, orientation, variant }) => {
  return (
    <Stepper activeStep={activeStep} orientation={orientation}>
      {steps[variant].map((step, index) => (
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
