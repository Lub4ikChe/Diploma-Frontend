import React from 'react';
import { routerLinks } from './router-links.enum';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';

interface Route {
  path: routerLinks;
  component: React.FC;
}

export const privateRoutes: Route[] = [];

export const publicRoutes: Route[] = [
  { path: routerLinks.SIGN_IN, component: SignIn },
  { path: routerLinks.SIGN_UP, component: SignUp },
  { path: routerLinks.FORGOT_PASSWORD, component: ForgotPassword },
];
