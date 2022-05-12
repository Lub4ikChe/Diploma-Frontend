import React from 'react';
import { useNavigate } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import LogoTitle from '../../LogoTitle';
import { StyledDivider } from '../../Divider';
import { StyledToolBar } from './styles';

import { privateMenuItems, publicMenuItems } from '../data';
import { routerLinks } from '../../../router/router-links.enum';

import { useTypedSelector } from '../../../hooks/use-typed-selector';

const DrawerNav: React.FC = () => {
  const navigate = useNavigate();
  const { isAuth } = useTypedSelector(state => state.userAuth);

  const onItemClick = (href: routerLinks): void => {
    navigate(href);
  };

  return (
    <>
      <StyledToolBar>
        <LogoTitle />
      </StyledToolBar>
      <StyledDivider />
      <List>
        {publicMenuItems.map(({ text, icon, href }) => (
          <ListItem key={text} button onClick={() => onItemClick(href)}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <StyledDivider />
      <List>
        {privateMenuItems.map(({ text, icon, href }) => (
          <ListItem disabled={!isAuth} key={text} button onClick={() => onItemClick(href)}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default DrawerNav;
