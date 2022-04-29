import React, { useState } from 'react';

import { Box, Button, CardActions, CardContent, Divider, Typography } from '@mui/material';

import {
  FormCardWrapper,
  FormCard,
  FormTextField,
  FormLink,
} from '../../../components/AuthFormCard';

import LogoTitle from '../../../components/LogoTitle';

import { StyledDiv } from './styles';

import { routerLinks } from '../../../router/router-links.enum';

const ForgotPasswordForm: React.FC = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const focusHandler = (): void => {
    setIsFocused(prev => !prev);
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  return (
    <FormCardWrapper maxWidth="sm">
      <LogoTitle />
      <FormCard onFocus={focusHandler} onBlur={focusHandler} variant="outlined">
        <CardContent>
          <Box mb={2}>
            <Typography variant="h6" fontWeight={600}>
              Forgot your password?
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography variant="body2">
              Please enter the email address you registered with and we will send you a link to
              reset your password
            </Typography>
          </Box>
          {/* {errorMessage &&  <ErrorAlert message={errorMessage} />} */}
          <FormTextField
            fullWidth
            label="Email address"
            value={email}
            error={isFocused && !email.length}
            variant="filled"
            margin="normal"
            InputProps={{
              disableUnderline: true,
            }}
            onChange={onEmailChange}
            // onKeyDown={onEnterSubmit}
          />
        </CardContent>
        <Divider className="divider" />
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            size="large"
            color="primary"
            className="submit-button"
            // onClick={() => submit()}
          >
            Send password reset link
          </Button>
        </CardActions>
      </FormCard>
      <FormLink to={routerLinks.SIGN_IN}>
        <StyledDiv>
          Already have an account?{' '}
          <Typography color="primary" variant="inherit" display="inline">
            Log in
          </Typography>
        </StyledDiv>
      </FormLink>
    </FormCardWrapper>
  );
};

export default ForgotPasswordForm;
