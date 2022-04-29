import styled from '@emotion/styled';
import { styled as MuiStyled, experimental_sx as sx } from '@mui/system';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

const drawerWidth = 240;

export const StyledAppBar = MuiStyled(AppBar)(
  sx({
    width: { md: `calc(100% - ${drawerWidth}px)` },
    ml: { md: `${drawerWidth}px` },
    background: '#161d2a',
    color: 'white',
    outline: 'solid #212a3b',
  }),
);

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledPermanentDrawer = MuiStyled(Drawer)(
  sx({
    display: { xs: 'none', md: 'block' },
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: drawerWidth,
      background: '#161d2a',
      color: 'white',
      borderColor: '#212a3b',
    },
  }),
);

export const StyledTemporaryDrawer = MuiStyled(Drawer)(
  sx({
    display: { xs: 'block', md: 'none' },
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: drawerWidth,
      background: '#161d2a',
      color: 'white',
      borderColor: '#212a3b',
    },
  }),
);

export const StyledMainBox = MuiStyled(Box)(
  sx({ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` }, color: 'white' }),
);

export const StyledNavBox = MuiStyled(Box)(
  sx({ width: { md: drawerWidth }, flexShrink: { md: 0 } }),
);

export const StyledIconButton = MuiStyled(IconButton)(sx({ mr: 2, display: { md: 'none' } }));

export const StyledLogInButton = styled(Button)`
  border-radius: 30px;
`;

export const StyledRegisterButton = styled(Button)`
  margin-right: 30px;
`;
