import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';
import { Box, Grid, IconButton } from '@mui/material';
import HeadsetRoundedIcon from '@mui/icons-material/HeadsetRounded';

export const StyledGridContainer = styled(Grid)`
  border: 1px solid #212a3b;
  border-radius: 2px;
`;

export const StyledBlurBox = styled(Box)`
  filter: blur(10px);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const StyledHeadsetRoundedIcon = styled(HeadsetRoundedIcon)`
  vertical-align: bottom;
  margin-right: 4px;
`;

export const StyledGriContentWrapper = styled(Grid)`
  background: #161d2a;
  border-top: 1px solid #212a3b;
`;

export const StyledIconButton = styled(IconButton)`
  padding: 0;
  margin-right: 15px;

  svg {
    height: 60px;
    width: 60px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: white;
  font-size: 14px;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
