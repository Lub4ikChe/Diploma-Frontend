import React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import DrawerNav from './DrawerNav';

import {
  StyledAppBar,
  StyledToolbar,
  StyledPermanentDrawer,
  StyledTemporaryDrawer,
  StyledMainBox,
  StyledNavBox,
  StyledIconButton,
  StyledLogInButton,
  StyledRegisterButton,
} from './styles';

import { routerLinks } from '../../router/router-links.enum';

import { NavBarProps } from './types';

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  const goToSignIn = (): void => {
    navigate(routerLinks.SIGN_IN);
  };

  const goToRegistration = (): void => {
    navigate(routerLinks.SIGN_UP);
  };

  const container = window !== undefined ? () => document.body : undefined;

  return (
    <Box display="flex" minHeight="100vh">
      <StyledAppBar position="fixed">
        <StyledToolbar>
          <Box m={0} p={0}>
            <StyledIconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </StyledIconButton>
          </Box>
          <Box m={0} p={0}>
            <StyledRegisterButton onClick={goToRegistration} variant="text" color="inherit">
              Register
            </StyledRegisterButton>
            <StyledLogInButton onClick={goToSignIn} variant="contained" color="primary">
              Log in
            </StyledLogInButton>
          </Box>
        </StyledToolbar>
      </StyledAppBar>
      <StyledNavBox component="nav">
        <StyledTemporaryDrawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <DrawerNav />
        </StyledTemporaryDrawer>
        <StyledPermanentDrawer variant="permanent" open>
          <DrawerNav />
        </StyledPermanentDrawer>
      </StyledNavBox>
      <StyledMainBox component="main">
        <Toolbar />
        {children}
      </StyledMainBox>
    </Box>
  );
};

export default NavBar;
