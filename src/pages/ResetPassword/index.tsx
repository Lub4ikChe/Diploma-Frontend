import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Typography, Box } from '@mui/material';

import { StyledBox, StyledResetButton } from './styles';
import { FormTextField } from '../../components/AuthFormCard';
import ErrorAlert from '../../components/ErrorAlert';

import { useTypedSelector } from '../../hooks/use-typed-selector';
import { useActions } from '../../hooks/use-actions';

import { routerLinks } from '../../router/router-links.enum';

const ResetPassword: React.FC = () => {
  const { resetToken } = useParams();
  const [password, setPassword] = React.useState<string>('');
  const [confirmPassword, setConfirmPassword] = React.useState<string>('');
  const [notMatchError, setNotMatchError] = React.useState<string>('');

  const navigate = useNavigate();

  const { loading, error } = useTypedSelector(state => state.userAuth);
  const { forgotPasswordReset } = useActions();

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
    if (resetToken) {
      forgotPasswordReset(resetToken, password);
      navigate(routerLinks.SIGN_IN);
    }
  };

  const onEnterSubmit = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.code === 'Enter' && !loading) {
      onSubmitHandle();
    }
  };

  const isResetButtonDisabled = !password.length || !confirmPassword.length || loading;

  return (
    <StyledBox>
      <Typography variant="h5">Reset password</Typography>
      <Box p="0 20px">
        <Box mb={2} maxWidth="500px">
          <Typography variant="body2">
            In order to protect your account, make sure your password must be at least 8 or more
            characters with a capital letter, a lowercase letter, and a number
          </Typography>
        </Box>
        {(error || notMatchError) && <ErrorAlert message={error || notMatchError} />}
        <FormTextField
          fullWidth
          label="New password"
          value={password}
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
          label="Confirm password"
          value={confirmPassword}
          variant="filled"
          margin="normal"
          InputProps={{
            disableUnderline: true,
          }}
          type="password"
          onChange={onConfirmPasswordChange}
          onKeyDown={onEnterSubmit}
        />
        <StyledResetButton
          onClick={onSubmitHandle}
          fullWidth
          variant="contained"
          disabled={isResetButtonDisabled}
        >
          Reset
        </StyledResetButton>
      </Box>
    </StyledBox>
  );
};

export default ResetPassword;
