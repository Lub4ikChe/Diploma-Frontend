import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, CardActions, CardContent, Divider, Typography } from '@mui/material';

import {
  FormCardWrapper,
  FormCard,
  FormTextField,
  FormLink,
} from '../../../components/AuthFormCard';

import LogoTitle from '../../../components/LogoTitle';
import ErrorAlert from '../../../components/ErrorAlert';

import { StyledFlexDid } from './styles';

import { routerLinks } from '../../../router/router-links.enum';

import { useTypedSelector } from '../../../hooks/use-typed-selector';
import { useActions } from '../../../hooks/use-actions';

const SignInForm: React.FC = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();
  const { error, loading, isAuth } = useTypedSelector(state => state.userAuth);
  const { signIn } = useActions();

  const focusHandler = (): void => {
    setIsFocused(prev => !prev);
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const onSubmitHandle = (): void => {
    if (!email.length || !password.length) {
      return;
    }
    signIn(email, password);
  };

  const onEnterSubmit = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.code === 'Enter' && !loading) {
      onSubmitHandle();
    }
  };

  React.useEffect(() => {
    if (isAuth) {
      navigate(routerLinks.ROOT);
    }
  }, [isAuth]);

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
          {error && <ErrorAlert message={error} />}
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
        </CardContent>
        <Divider className="divider" />
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            size="large"
            color="primary"
            disabled={loading}
            onClick={onSubmitHandle}
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
