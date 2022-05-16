import React, { useState } from 'react';

import { Box, Button, CardActions, CardContent, Divider, Typography } from '@mui/material';

import {
  FormCardWrapper,
  FormCard,
  FormTextField,
  FormLink,
} from '../../../components/AuthFormCard';
import LogoTitle from '../../../components/LogoTitle';
import ErrorAlert from '../../../components/ErrorAlert';

import { StyledDiv } from './styles';

import { routerLinks } from '../../../router/router-links.enum';

import { useTypedSelector } from '../../../hooks/use-typed-selector';
import { useActions } from '../../../hooks/use-actions';

const SignUpForm: React.FC = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [notMatchError, setNotMatchError] = React.useState<string>('');

  const { loading, error } = useTypedSelector(state => state.userAuth);
  const { signUp } = useActions();

  const focusHandler = (): void => {
    setIsFocused(prev => !prev);
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const onConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setConfirmPassword(event.target.value);
  };

  const onSubmitHandle = (): void => {
    if (password !== confirmPassword) {
      setNotMatchError("Passwords don't match");
      return;
    }
    signUp(email, password);
  };

  const onEnterSubmit = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.code === 'Enter' && !loading) {
      onSubmitHandle();
    }
  };

  const isSignUpButtonDisabled = loading;

  return (
    <FormCardWrapper maxWidth="sm">
      <LogoTitle />
      <FormCard onFocus={focusHandler} onBlur={focusHandler} variant="outlined">
        <CardContent>
          <Box mb={2}>
            <Typography variant="h6" fontWeight={600}>
              Create your account
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography variant="body2">
              In order to protect your account, make sure your password must be at least 8 or more
              characters with a capital letter, a lowercase letter, and a number
            </Typography>
          </Box>
          {(error || notMatchError) && <ErrorAlert message={error || notMatchError} />}
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
            onKeyDown={onEnterSubmit}
          />
          <FormTextField
            fullWidth
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
            onKeyDown={onEnterSubmit}
          />
          <FormTextField
            fullWidth
            id="filled-basic-2"
            label="Confirm password"
            value={confirmPassword}
            error={isFocused && !confirmPassword.length}
            variant="filled"
            margin="normal"
            InputProps={{
              disableUnderline: true,
            }}
            type="password"
            onChange={onConfirmPasswordChange}
            onKeyDown={onEnterSubmit}
          />
        </CardContent>
        <Divider className="divider" />
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            size="large"
            color="primary"
            disabled={isSignUpButtonDisabled}
            onClick={onSubmitHandle}
          >
            Register
          </Button>
        </CardActions>
      </FormCard>
      <FormLink to={routerLinks.SIGN_IN}>
        <StyledDiv>
          Already have an account?{' '}
          <Typography color="primary" variant="inherit" display="inline">
            Login
          </Typography>
        </StyledDiv>
      </FormLink>
    </FormCardWrapper>
  );
};

export default SignUpForm;
