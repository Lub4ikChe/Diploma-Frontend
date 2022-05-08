import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  maxwidth: 600px;
  width: 70%;

  background-color: #161d2a;
  color: white;

  padding: 16px;

  border: 1px solid #212a3b;
  outline: none;

  max-height: 80%;
  overflow-y: auto;
`;
