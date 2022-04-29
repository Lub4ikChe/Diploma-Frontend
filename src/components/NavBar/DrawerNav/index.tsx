import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import LogoTitle from '../../LogoTitle';
import { StyledToolBar, StyledDivider } from './styles';

import { privateMenuItems, publicMenuItems } from '../data';

const DrawerNav: React.FC = () => {
  return (
    <>
      <StyledToolBar>
        <LogoTitle />
      </StyledToolBar>
      <StyledDivider />
      <List>
        {publicMenuItems.map(({ text, icon }) => (
          <ListItem key={text} button>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <StyledDivider />
      <List>
        {privateMenuItems.map(({ text, icon }) => (
          <ListItem disabled key={text} button>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default DrawerNav;
