import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const StyledDiv = styled.div`
  margin-top: 5px;
  color: white;
`;

export const StyledBox = styled(Box)`
  align-items: center;
  background: #10141d;
  z-index: 9999;
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  justify-content: center;
`;
