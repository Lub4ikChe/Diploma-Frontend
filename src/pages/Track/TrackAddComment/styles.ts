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
`;

export const StyledButton = styled(Button)`
  color: white;
  font-weight: 600;

  :disabled {
    color: #b2baca;
    background: #283543;
  }
`;
