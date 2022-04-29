import { ReactElement, ReactNode } from 'react';

import { menuItemsText } from './data';

export interface NavBarProps {
  children?: ReactNode;
}

export interface MenuItem {
  text: menuItemsText;
  icon: ReactElement;
}
