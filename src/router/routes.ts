import { routerLinks } from './router-links.enum';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';

import CompleteRegistration from '../pages/CompleteRegistration';

import Home from '../pages/Home';
import Tracks from '../pages/Tracks';
import Albums from '../pages/Albums';
import Authors from '../pages/Authors';

import LikedTracks from '../pages/LikedTracks';
import MyTracks from '../pages/MyTracks';
import MyAlbums from '../pages/MyAlbums';

import AlbumPage from '../pages/Album';
import Author from '../pages/Author';
import TrackPage from '../pages/Track';

interface Route {
  path: routerLinks;
  component: React.FC;
}

export const privateRoutes: Route[] = [
  { path: routerLinks.LIKED_TRACKS, component: LikedTracks },
  { path: routerLinks.MY_TRACKS, component: MyTracks },
  { path: routerLinks.MY_ALBUMS, component: MyAlbums },

  { path: routerLinks.SPECIFIC_TRACK, component: TrackPage },
  { path: routerLinks.SPECIFIC_ALBUM, component: AlbumPage },
  { path: routerLinks.SPECIFIC_AUTHOR, component: Author },
];

export const publicRoutes: Route[] = [
  { path: routerLinks.SIGN_IN, component: SignIn },
  { path: routerLinks.SIGN_UP, component: SignUp },
  { path: routerLinks.FORGOT_PASSWORD, component: ForgotPassword },

  { path: routerLinks.COMPLETE_REGISTRATION, component: CompleteRegistration },

  { path: routerLinks.ROOT, component: Home },
  { path: routerLinks.TRACKS, component: Tracks },
  { path: routerLinks.ALBUMS, component: Albums },
  { path: routerLinks.AUTHORS, component: Authors },
];
