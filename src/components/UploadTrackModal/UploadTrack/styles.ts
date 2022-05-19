import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const StyledStepButton = styled(Button)`
  background: rgb(20, 50, 67);
  color: rgb(2, 200, 254);
  border-radius: 8px;
  font-weight: 600;

  :hover {
    background: rgb(20, 50, 67);
  }

  :disabled {
    color: white;
  }
`;
