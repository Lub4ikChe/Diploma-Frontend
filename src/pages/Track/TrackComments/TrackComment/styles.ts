import styled from '@emotion/styled';
import { IconButton, Button } from '@mui/material';

export const StyledEditIcon = styled(IconButton)`
  padding: 0;
  margin-right: 0;
`;

export const StyledDeleteIcon = styled(IconButton)`
  padding: 0;
`;

export const StyledSaveButton = styled(Button)`
  :disabled {
    color: white;
  }
`;
