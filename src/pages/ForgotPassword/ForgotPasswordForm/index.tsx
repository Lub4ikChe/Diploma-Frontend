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

import { StyledDiv, StyledBox } from './styles';
import ErrorAlert from '../../../components/ErrorAlert';

import { routerLinks } from '../../../router/router-links.enum';

import { useTypedSelector } from '../../../hooks/use-typed-selector';
import { useActions } from '../../../hooks/use-actions';

const ForgotPasswordForm: React.FC = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [showResetLinkSent, setShowResetLinkSent] = useState<boolean>(false);

  const navigate = useNavigate();

  const { loading, error } = useTypedSelector(state => state.userAuth);
  const { forgotPasswordRequest } = useActions();

  const focusHandler = (): void => {
    setIsFocused(prev => !prev);
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const onSubmitHandle = (): void => {
    forgotPasswordRequest(email);
    setShowResetLinkSent(true);
  };

  const onEnterSubmit = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.code === 'Enter' && !loading) {
      onSubmitHandle();
    }
  };

  const onResetOkClick = (): void => {
    navigate(routerLinks.SIGN_IN);
  };

  const isSendResetLinkButtonDisabled = loading;

  if (showResetLinkSent && !error) {
    return (
      <StyledBox>
        <Typography variant="h5">We send you email with link to reset password</Typography>
        <Button variant="contained" size="large" color="primary" onClick={onResetOkClick}>
          OK
        </Button>
      </StyledBox>
    );
  }

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
        </CardContent>
        <Divider className="divider" />
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            size="large"
            color="primary"
            onClick={onSubmitHandle}
            disabled={isSendResetLinkButtonDisabled}
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
