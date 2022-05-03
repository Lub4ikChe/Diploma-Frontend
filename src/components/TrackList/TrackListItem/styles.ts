import styled from '@emotion/styled';

import { Grid, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const StyledGrid = styled(Grid)`
  :hover {
    background: #262d3b;
  }
`;

export const StyledLink = styled(NavLink)`
  color: white;
  font-size: 16px;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

export const StyleIconButton = styled(IconButton)`
  right: 12px;
  position: 'relative';
`;
