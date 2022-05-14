import * as UserActionCreators from './user-auth';
import * as AppActionCreators from './app';
import * as TracksActionCreators from './tracks';
import * as AlbumsActionCreators from './albums';
import * as AuthorsActionCreators from './authors';
import * as HomeActionCreators from './home';

export default {
  ...UserActionCreators,
  ...AppActionCreators,
  ...TracksActionCreators,
  ...AlbumsActionCreators,
  ...AuthorsActionCreators,
  ...HomeActionCreators,
};
