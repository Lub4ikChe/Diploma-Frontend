import React from 'react';

import { Grid, Box, ListItemIcon, ListItemText, Typography, Hidden } from '@mui/material';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

import { StyledMenu, StyledMenuItem, StyledAvatar, StyledGrid, StyledSubTitle } from './style';

import { menuItems } from './data';

const AccountMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <StyledGrid container alignItems="center" onClick={handleClick}>
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
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {menuItems.map(({ option, icon: Icon }) => {
          return (
            <StyledMenuItem key={option} onClick={handleClose}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={option} />
            </StyledMenuItem>
          );
        })}
      </StyledMenu>
    </Box>
  );
};

export default AccountMenu;
