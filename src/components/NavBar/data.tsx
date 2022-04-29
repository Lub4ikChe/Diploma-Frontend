import React from 'react';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AudiotrackRoundedIcon from '@mui/icons-material/AudiotrackRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

import { MenuItem } from './types';

export enum menuItemsText {
  HOME = 'Home',
  TRACKS = 'Tracks',
  ALBUMS = 'Albums',
  AUTHORS = 'Authors',
  LIKED_TRACKS = 'Liked tracks',
  MY_TRACKS = 'My tracks',
  MY_ALBUMS = 'My albums',
  NONE = 'None',
}

export const publicMenuItems: MenuItem[] = [
  { text: menuItemsText.HOME, icon: <HomeRoundedIcon color="primary" /> },
  { text: menuItemsText.TRACKS, icon: <AudiotrackRoundedIcon color="primary" /> },
  { text: menuItemsText.ALBUMS, icon: <LibraryMusicRoundedIcon color="primary" /> },
  { text: menuItemsText.AUTHORS, icon: <PeopleAltRoundedIcon color="primary" /> },
];

export const privateMenuItems: MenuItem[] = [
  { text: menuItemsText.LIKED_TRACKS, icon: <FavoriteRoundedIcon color="primary" /> },
  { text: menuItemsText.MY_TRACKS, icon: <AudiotrackRoundedIcon color="primary" /> },
  { text: menuItemsText.MY_ALBUMS, icon: <LibraryMusicRoundedIcon color="primary" /> },
];
