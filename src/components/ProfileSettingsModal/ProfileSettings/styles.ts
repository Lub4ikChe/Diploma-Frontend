import styled from '@emotion/styled';
import { TextField, Avatar, Button } from '@mui/material';

export const StyledTextField = styled(TextField)`
  background: #212a3b;
  border-radius: 6px;

  label {
    color: #b2baca;
  }

  .MuiFilledInput-root {
    color: white !important;
  }

  .Mui-focused {
    background: #143243;
    color: rgb(2, 200, 254);
  }

  .MuiFormLabel-root.Mui-focused {
    color: rgb(2, 200, 254);
  }
`;

export const StyledAvatar = styled(Avatar)`
  height: 80px;
  width: 80px;
`;

export const StyledUploadButton = {
  background: 'rgb(20, 50, 67)',
  color: 'rgb(2, 200, 254)',
  borderRadius: '8px',
  fontWeight: 600,
};

export const StyledSaveButton = styled(Button)`
  color: #10141d !important;
  background-color: #02c8fe !important;
  font-weight: 600;

  :disabled {
    background: #283543 !important;
  }
`;
