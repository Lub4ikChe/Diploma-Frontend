import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Typography, Box } from '@mui/material';

import { FormTextField } from '../../components/AuthFormCard';

import { StyledBox, StyledCompleteButton } from './styles';

import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';

import { routerLinks } from '../../router/router-links.enum';

const CompleteRegistration: React.FC = () => {
  const [firstName, setFirstName] = React.useState<string>('');
  const [lastName, setLastName] = React.useState<string>('');

  const navigate = useNavigate();

  const { loading, user } = useTypedSelector(state => state.userAuth);
  const { createUserInfo } = useActions();

  const onFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFirstName(event.target.value);
  };

  const onLastNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLastName(event.target.value);
  };

  const onCompleteRegistrationClick = (): void => {
    createUserInfo(firstName, lastName);
    navigate(routerLinks.ROOT);
  };

  React.useEffect(() => {
    if (user?.information || !localStorage.getItem('token')) {
      navigate(routerLinks.ROOT);
    }
  }, []);

  const isCompleteButtonDisabled = !firstName.length || !lastName.length || loading;

  return (
    <StyledBox>
      <Typography variant="h5">Complete registration</Typography>
      <Box p="0 20px">
        <FormTextField
          fullWidth
          label="First name"
          value={firstName}
          variant="filled"
          margin="normal"
          InputProps={{
            disableUnderline: true,
          }}
          onChange={onFirstNameChange}
        />
        <FormTextField
          fullWidth
          label="Last name"
          value={lastName}
          variant="filled"
          margin="normal"
          InputProps={{
            disableUnderline: true,
          }}
          onChange={onLastNameChange}
        />
        <StyledCompleteButton
          onClick={onCompleteRegistrationClick}
          fullWidth
          variant="contained"
          disabled={isCompleteButtonDisabled}
        >
          Complete
        </StyledCompleteButton>
      </Box>
    </StyledBox>
  );
};

export default CompleteRegistration;
