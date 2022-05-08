import React from 'react';

import { Box, Typography, Button } from '@mui/material';

import { StyledDivider } from '../../Divider';
import { StyledTextField, StyledAvatar, StyledUploadButton, StyledSaveButton } from './styles';
import CloseHeaderModal from '../../Modal/CloseHeaderModal';

import { ProfileSettingsProps } from './types';

const ProfileSettings: React.FC<ProfileSettingsProps> = ({ closeModal }) => {
  const [firstName, setFirstName] = React.useState<string>('');
  const [lastName, setLastName] = React.useState<string>('');

  const onFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFirstName(event.target.value);
  };

  const onLastNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLastName(event.target.value);
  };

  const isSaveChangesButtonDisabled = !firstName.length || !lastName.length;

  return (
    <>
      <CloseHeaderModal label="Profile settings" closeModal={closeModal} />
      <StyledDivider />
      <Box mt={2} display="flex" pb={2}>
        <StyledAvatar src="" />
        <Box ml={2} display="flex" justifyContent="space-between" flexDirection="column">
          <Typography variant="h6" component="h2">
            Upload your profile image
          </Typography>
          <label htmlFor="contained-button-file">
            <input
              style={{ display: 'none' }}
              accept="image/*"
              id="contained-button-file"
              type="file"
            />
            <Button style={StyledUploadButton} variant="contained" component="span">
              Choose image
            </Button>
          </label>
        </Box>
      </Box>
      <StyledDivider />
      <Box mt={2} display="flex" flexDirection="column" pb={2}>
        <StyledTextField
          fullWidth
          label="First Name"
          value={firstName}
          variant="filled"
          margin="normal"
          InputProps={{
            disableUnderline: true,
          }}
          onChange={onFirstNameChange}
        />
        <StyledTextField
          fullWidth
          label="Last Name"
          value={lastName}
          variant="filled"
          margin="normal"
          InputProps={{
            disableUnderline: true,
          }}
          onChange={onLastNameChange}
        />
      </Box>
      <StyledDivider />
      <Box mt={2} textAlign="right">
        <StyledSaveButton variant="contained" disabled={isSaveChangesButtonDisabled}>
          Save Changes
        </StyledSaveButton>
      </Box>
    </>
  );
};

export default ProfileSettings;
