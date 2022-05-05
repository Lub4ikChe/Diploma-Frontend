import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';
import { Box, Card, CardContent } from '@mui/material';

export const StyledLink = styled(NavLink)`
  color: white;
  font-size: 16px;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

export const StyledCard = styled(Card)`
  max-width: 202px;
  border-radius: 10px;
  background: none;
`;

export const StyledBoxWrapper = styled(Box)`
  background: #161d2a;
  color: white;
`;

export const StyledCardContent = styled(CardContent)`
  padding: 0;
`;
