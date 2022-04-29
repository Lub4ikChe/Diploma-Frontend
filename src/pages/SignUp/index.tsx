import React from 'react';

import { Grid } from '@mui/material';
import SignInForm from './SignUpForm';

const SignUp: React.FC = () => {
  return (
    <Grid container justifyContent="center">
      <SignInForm />
    </Grid>
  );
};

export default SignUp;
