import styled from '@emotion/styled';
import { TextField, Button } from '@mui/material';

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
    background: #143243 !important;
    color: rgb(2, 200, 254);
  }

  .MuiFormLabel-root.Mui-focused {
    color: rgb(2, 200, 254);
  }

  .Mui-disabled {
    border: 1px dotted #313b50;
    background-color: #161d2a;
    color: rgba(255, 255, 255, 0.5) !important;
    -webkit-text-fill-color: rgba(255, 255, 255, 0.5) !important;
  }

  .MuiInputLabel-root.Mui-disabled {
    border: none;
    color: rgba(255, 255, 255, 0.5) !important;
  }
`;

export const StyledForgotPasswordButton = styled(Button)`
  background: rgb(20, 50, 67);
  color: rgb(2, 200, 254);
  border-radius: 8px;
  font-weight: 600;

  :hover {
    background: rgb(20, 50, 67);
  }
`;

export const StyledSaveButton = styled(Button)`
  color: #10141d !important;
  background-color: #02c8fe !important;
  font-weight: 600;

  :disabled {
    background: #283543 !important;
  }
`;
