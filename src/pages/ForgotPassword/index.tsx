import React from 'react';

import { Grid } from '@mui/material';
import ForgotPasswordForm from './ForgotPasswordForm';

const ForgotPassword: React.FC = () => {
  return (
    <Grid container justifyContent="center">
      <ForgotPasswordForm />
    </Grid>
  );
};

export default ForgotPassword;
