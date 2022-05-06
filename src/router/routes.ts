import React from 'react';
import { routerLinks } from './router-links.enum';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';

import Tracks from '../pages/Tracks';
import Albums from '../pages/Albums';
import Authors from '../pages/Authors';

interface Route {
  path: routerLinks;
  component: React.FC;
}

export const privateRoutes: Route[] = [];

export const publicRoutes: Route[] = [
  { path: routerLinks.SIGN_IN, component: SignIn },
  { path: routerLinks.SIGN_UP, component: SignUp },
  { path: routerLinks.FORGOT_PASSWORD, component: ForgotPassword },

  { path: routerLinks.TRACKS, component: Tracks },
  { path: routerLinks.ALBUMS, component: Albums },
  { path: routerLinks.AUTHORS, component: Authors },
];
