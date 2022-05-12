import * as UserActionCreators from './user-auth';
import * as AppActionCreators from './app';
import * as TracksActionCreators from './tracks';
import * as AlbumsActionCreators from './albums';

export default {
  ...UserActionCreators,
  ...AppActionCreators,
  ...TracksActionCreators,
  ...AlbumsActionCreators,
};
