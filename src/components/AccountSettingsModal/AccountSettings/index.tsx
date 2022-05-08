import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Typography, Grid } from '@mui/material';

import { StyledDivider } from '../../Divider';
import { StyledTextField, StyledForgotPasswordButton, StyledSaveButton } from './styles';
import CloseHeaderModal from '../../Modal/CloseHeaderModal';

import { AccountSettingsProps } from './types';
import { routerLinks } from '../../../router/router-links.enum';

const AccountSettings: React.FC<AccountSettingsProps> = ({ closeModal }) => {
  const [currentPassword, setCurrentPassword] = React.useState<string>('');
  const [newPassword, setNewPassword] = React.useState<string>('');
  const [confirmNewPassword, setConfirmNewPassword] = React.useState<string>('');
  const navigate = useNavigate();

  const onCurrentPasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCurrentPassword(event.target.value);
  };

  const onNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewPassword(event.target.value);
  };

  const onConfirmNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setConfirmNewPassword(event.target.value);
  };

  const onForgotPasswordClick = (): void => {
    navigate(routerLinks.FORGOT_PASSWORD);
    closeModal();
  };

  const isSaveChangesButtonDisabled =
    !currentPassword.length || !newPassword.length || !confirmNewPassword.length;

  return (
    <>
      <CloseHeaderModal label="Account settings" closeModal={closeModal} />
      <StyledDivider />
      <Box mt={2} display="flex" flexDirection="column" pb={2}>
        <Typography mb={1} fontWeight={600} variant="body1">
          Change password
        </Typography>
        <Typography variant="body2">
          Updating your password once in a while is a necessary security practice. In order to
          protect your account, your password must be at least 8 or more characters with a capital
          letter, a lowercase letter, and a number.
        </Typography>
      </Box>
      <StyledDivider />
      <Box mt={2} display="flex" flexDirection="column" pb={2}>
        <StyledTextField
          fullWidth
          label="Email address"
          value="jocker.rap.jocker@gmail.com"
          disabled
          variant="filled"
          margin="normal"
          InputProps={{
            disableUnderline: true,
          }}
        />
        <StyledTextField
          fullWidth
          type="password"
          label="Current Password"
          value={currentPassword}
          variant="filled"
          margin="normal"
          InputProps={{
            disableUnderline: true,
          }}
          onChange={onCurrentPasswordChange}
        />
        <StyledTextField
          fullWidth
          type="password"
          label="New Password"
          value={newPassword}
          variant="filled"
          margin="normal"
          InputProps={{
            disableUnderline: true,
          }}
          onChange={onNewPasswordChange}
        />
        <StyledTextField
          fullWidth
          type="password"
          label="Confirm New Password"
          value={confirmNewPassword}
          variant="filled"
          margin="normal"
          InputProps={{
            disableUnderline: true,
          }}
          onChange={onConfirmNewPasswordChange}
        />
      </Box>
      <StyledDivider />
      <Grid container spacing={1} mt={2}>
        <Grid item xs={12} sm={6} md={6}>
          <StyledForgotPasswordButton onClick={onForgotPasswordClick} fullWidth variant="contained">
            I forgot my password
          </StyledForgotPasswordButton>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <StyledSaveButton disabled={isSaveChangesButtonDisabled} fullWidth variant="contained">
            Save Changes
          </StyledSaveButton>
        </Grid>
      </Grid>
    </>
  );
};

export default AccountSettings;
