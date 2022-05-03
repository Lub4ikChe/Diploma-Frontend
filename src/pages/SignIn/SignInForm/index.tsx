import React, { useState } from 'react';

import { Box, Button, CardActions, CardContent, Divider, Typography } from '@mui/material';

import {
  FormCardWrapper,
  FormCard,
  FormTextField,
  FormLink,
} from '../../../components/AuthFormCard';

import LogoTitle from '../../../components/LogoTitle';

import { StyledFlexDid } from './styles';

import { routerLinks } from '../../../router/router-links.enum';

const SignInForm: React.FC = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const focusHandler = (): void => {
    setIsFocused(prev => !prev);
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  return (
    <FormCardWrapper maxWidth="sm">
      <LogoTitle />
      <FormCard onFocus={focusHandler} onBlur={focusHandler} variant="outlined">
        <CardContent>
          <Box mb={2}>
            <Typography variant="h6" fontWeight={600}>
              Log in to your account
            </Typography>
          </Box>
          {/* {errorMessage &&  <ErrorAlert message={errorMessage} />} */}
          <FormTextField
            fullWidth
            label="Email address"
            value={email}
            error={isFocused && !email.length}
            // helperText={isFocused && !email.length && 'Incorrect entry.'}
            variant="filled"
            margin="normal"
            InputProps={{
              disableUnderline: true,
            }}
            onChange={onEmailChange}
            // onKeyDown={onEnterSubmit}
          />
          <FormTextField
            fullWidth
            id="filled-basic-2"
            label="Password"
            value={password}
            error={isFocused && !password.length}
            variant="filled"
            margin="normal"
            InputProps={{
              disableUnderline: true,
            }}
            type="password"
            onChange={onPasswordChange}
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
            Log in
          </Button>
        </CardActions>
      </FormCard>
      <StyledFlexDid>
        <FormLink to={routerLinks.FORGOT_PASSWORD}>
          <Typography color="primary" variant="inherit" display="inline">
            Forgot Password?
          </Typography>
        </FormLink>
        <FormLink to={routerLinks.SIGN_UP}>
          <Typography color="primary" variant="inherit" display="inline">
            Don't have an account yet?
          </Typography>
        </FormLink>
      </StyledFlexDid>
    </FormCardWrapper>
  );
};

export default SignInForm;
