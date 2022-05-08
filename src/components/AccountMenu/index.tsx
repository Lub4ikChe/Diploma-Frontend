import React from 'react';

import { Grid, Box, ListItemIcon, ListItemText, Typography, Hidden } from '@mui/material';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

import { StyledMenu, StyledMenuItem, StyledAvatar, StyledGrid, StyledSubTitle } from './styles';
import ProfileSettingsModal from '../ProfileSettingsModal';
import AccountSettingsModal from '../AccountSettingsModal';

import { menuItems, MenuItemsType } from './data';

const AccountMenu: React.FC = () => {
  const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(null);
  const [profileSettingsModalOpen, setProfileSettingsModalOpen] = React.useState(false);
  const [accountSettingsModalOpen, setAccountSettingsModalOpen] = React.useState(false);
  const menuOpen = Boolean(menuAnchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (): void => {
    setMenuAnchorEl(null);
  };

  const handleCloseProfileSettingsModal = (): void => setProfileSettingsModalOpen(false);
  const handleOpenProfileSettingsModal = (): void => setProfileSettingsModalOpen(true);

  const handleCloseAccountSettingsModal = (): void => setAccountSettingsModalOpen(false);
  const handleOpenAccountSettingsModal = (): void => setAccountSettingsModalOpen(true);

  const logOut = (): any => null;

  const onMenuItemClick = (itemType: MenuItemsType): void => {
    handleMenuClose();
    switch (itemType) {
      case MenuItemsType.profileSettings:
        handleOpenProfileSettingsModal();
        break;
      case MenuItemsType.accountSettings:
        handleOpenAccountSettingsModal();
        break;
      case MenuItemsType.logOut:
        logOut();
        break;
      default:
        break;
    }
  };

  return (
    <Box>
      <StyledGrid container alignItems="center" onClick={handleMenuClick}>
        <Grid item>
          <StyledAvatar src="" />
        </Grid>
        <Hidden smDown>
          <Grid item ml={2}>
            <Typography fontWeight={600} variant="body2">
              Name name
            </Typography>
            <StyledSubTitle variant="caption">jocker.rap.jocekr@gmail.com</StyledSubTitle>
          </Grid>
          <Grid item alignSelf="center">
            <KeyboardArrowDownRoundedIcon />
          </Grid>
        </Hidden>
      </StyledGrid>
      <StyledMenu
        anchorEl={menuAnchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {menuItems.map(({ option, icon: Icon, type }) => {
          return (
            <StyledMenuItem key={option} onClick={() => onMenuItemClick(type)}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={option} />
            </StyledMenuItem>
          );
        })}
      </StyledMenu>
      {profileSettingsModalOpen && (
        <ProfileSettingsModal
          open={profileSettingsModalOpen}
          closeModal={handleCloseProfileSettingsModal}
        />
      )}
      {accountSettingsModalOpen && (
        <AccountSettingsModal
          open={accountSettingsModalOpen}
          closeModal={handleCloseAccountSettingsModal}
        />
      )}
    </Box>
  );
};

export default AccountMenu;
