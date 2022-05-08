import React from 'react';

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

interface MenuItem {
  option: string;
  icon: React.FC;
  type: MenuItemsType;
}

export enum MenuItemsType {
  profileSettings = 'PROFILE_SETTINGS',
  accountSettings = 'ACCOUNT_SETTINGS',
  logOut = 'LOG_OUT',
}

export const menuItems: MenuItem[] = [
  { option: 'My Profile', icon: AccountCircleRoundedIcon, type: MenuItemsType.profileSettings },
  { option: 'My account', icon: SettingsIcon, type: MenuItemsType.accountSettings },
  { option: 'Log out', icon: LogoutRoundedIcon, type: MenuItemsType.logOut },
];
