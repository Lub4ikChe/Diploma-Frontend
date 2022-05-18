import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';
import { Grid, IconButton, Typography } from '@mui/material';

export const StyledLink = styled(NavLink)`
  color: white;
  font-size: 14px;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

export const StyledGridItem = styled(Grid)`
  :hover {
    background: #262d3b;
    cursor: pointer;
  }
`;

export const StyledIconButton = styled(IconButton)`
  right: 4px;
  position: relative;
  padding: 0;
`;

export const StyledTrackName = styled(Typography)`
  cursor: text;
`;
