import React from 'react';

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

interface MenuItem {
  option: string;
  icon: React.FC;
}

export const menuItems: MenuItem[] = [
  { option: 'My Profile', icon: AccountCircleRoundedIcon },
  { option: 'My account', icon: SettingsIcon },
  { option: 'Log out', icon: LogoutRoundedIcon },
];
