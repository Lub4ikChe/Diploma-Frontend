import React from 'react';

import { Grid } from '@mui/material';
import SignInForm from './SignInForm';

const SignIn: React.FC = () => {
  return (
    <Grid container justifyContent="center">
      <SignInForm />
    </Grid>
  );
};

export default SignIn;
