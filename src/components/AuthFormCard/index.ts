import styled from '@emotion/styled';

import { Card, Grid, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const FormCardWrapper = styled(Grid)`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 16px;
  margin-top: 15px;
`;

export const FormCard = styled(Card)`
  background: #161d2a;
  color: white;
  max-width: 550px;
  width: 100%;
  border-color: #212a3b;

  .divider {
    background: #212a3b;
  }

  .submit-button {
    font-weight: 800;
  }
`;

export const FormTextField = styled(TextField)`
  background: #212a3b;

  label {
    color: #606878;
  }

  .MuiFilledInput-root {
    color: white;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #1e2636 inset !important;
    -webkit-text-fill-color: white !important;
    border-radius: 0;
  }
`;

export const FormLink = styled(NavLink)`
  font-size: 14px;
  font-weight: 600;
  color: inherit;
  text-decoration: none;
  display: block;
  text-align: center;
  cursor: pointer;
`;
