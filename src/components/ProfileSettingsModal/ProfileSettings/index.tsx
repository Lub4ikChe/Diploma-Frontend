import React from 'react';

import { Box, Typography, Button } from '@mui/material';

import { StyledDivider } from '../../Divider';
import {
  StyledTextField,
  StyledAvatar,
  StyledUploadButton,
  StyledSaveButton,
  StyledDeleteIcon,
} from './styles';
import CloseHeaderModal from '../../Modal/CloseHeaderModal';
import ErrorAlert from '../../ErrorAlert';

import { ProfileSettingsProps } from './types';

import { useTypedSelector } from '../../../hooks/use-typed-selector';
import { useActions } from '../../../hooks/use-actions';

const ProfileSettings: React.FC<ProfileSettingsProps> = ({ closeModal }) => {
  const { user, loading, error } = useTypedSelector(state => state.userAuth);
  const { updateUserInfo, updateUserPhoto, deleteUserPhoto } = useActions();

  const [firstName, setFirstName] = React.useState<string>(user?.information?.firstName || '');
  const [lastName, setLastName] = React.useState<string>(user?.information?.lastName || '');

  const [imageSrc, setImageSrc] = React.useState<string>(user?.information?.photo?.url || '');
  const [imageFile, setImageFile] = React.useState<File | null>(null);
  const [isiDeleteImage, setIsiDeleteImage] = React.useState<boolean>(false);

  const onFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFirstName(event.target.value);
  };

  const onLastNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLastName(event.target.value);
  };

  const onDeletePhotoHandler = (): void => {
    setImageSrc('');
    setImageFile(null);
    setIsiDeleteImage(true);
  };

  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file: File | null = event.target.files && event.target.files[0];
    const imgSrc = (file && window.URL.createObjectURL(file)) || '';
    setImageFile(file);
    setImageSrc(imgSrc);
    setIsiDeleteImage(false);
  };

  const onSaveHandler = (): void => {
    if (imageFile) {
      updateUserPhoto(imageFile);
    }
    if (isiDeleteImage) {
      deleteUserPhoto();
    }
    updateUserInfo(firstName, lastName);
    setIsiDeleteImage(false);
  };

  const isSaveChangesButtonDisabled = !firstName.length || !lastName.length || loading;
  const isChoosePhotoButtonDisabled = loading;

  return (
    <>
      <CloseHeaderModal label="Profile settings" closeModal={closeModal} />
      <StyledDivider />
      {error && <ErrorAlert message={error} />}
      <Box mt={2} display="flex" pb={2}>
        <Box>
          <StyledAvatar
            imgProps={{
              crossOrigin: 'anonymous',
            }}
            src={imageSrc}
          />
          <StyledDeleteIcon onClick={onDeletePhotoHandler} />
        </Box>
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
              onChange={onFileInputChange}
            />
            <Button
              disabled={isChoosePhotoButtonDisabled}
              style={StyledUploadButton}
              variant="contained"
              component="span"
            >
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
        <StyledSaveButton
          onClick={onSaveHandler}
          variant="contained"
          disabled={isSaveChangesButtonDisabled}
        >
          Save Changes
        </StyledSaveButton>
      </Box>
    </>
  );
};

export default ProfileSettings;
