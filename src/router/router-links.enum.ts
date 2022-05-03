export enum routerLinks {
  ALL = '*',
  ROOT = '/',

  SIGN_IN = '/signin',
  SIGN_UP = '/signup',
  FORGOT_PASSWORD = '/forgot-password',

  TRACKS = '/track',
  SPECIFIC_TRACK = '/track/:id',

  ALBUMS = '/album',
  SPECIFIC_ALBUM = '/album/:id',

  AUTHORS = '/author',
  SPECIFIC_AUTHOR = '/author/:id',

  LIKED_TRACKS = '/liked-tracks',
  MY_TRACKS = '/my/track',
  MY_ALBUMS = '/my/album',
}