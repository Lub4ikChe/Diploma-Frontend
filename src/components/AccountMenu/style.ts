import styled from '@emotion/styled';

import { Grid, Menu, MenuItem, Avatar, Typography } from '@mui/material';

export const StyledMenu = styled(Menu)`
  .MuiMenu-paper {
    background: #161d2a;
    color: white;
    padding: 10px;
    border: 1px solid#212A3B;
    width: 200px;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  background-color: transparent !important;
  :hover {
    background-color: #313b50 !important;
  }

  .MuiListItemIcon-root {
    color: white;
  }
`;

export const StyledAvatar = styled(Avatar)`
  width: 35px;
  height: 35px;
`;

export const StyledGrid = styled(Grid)`
  cursor: pointer;
`;

export const StyledSubTitle = styled(Typography)`
  color: '#B2BACA';
`;
