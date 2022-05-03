import { ReactElement, ReactNode } from 'react';

import { menuItemsText } from './data';
import { routerLinks } from '../../router/router-links.enum';

export interface NavBarProps {
  children?: ReactNode;
}

export interface MenuItem {
  text: menuItemsText;
  icon: ReactElement;
  href: routerLinks;
}
