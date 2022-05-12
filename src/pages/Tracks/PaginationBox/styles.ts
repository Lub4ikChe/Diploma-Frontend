import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const NextPageButton = styled(Button)`
  margin-right: 10px;
  :disabled {
    background: #283543 !important;
  }
`;

export const PrevPageButton = styled(Button)`
  :disabled {
    background: #283543 !important;
    color: #10141d !important;
  }
`;
