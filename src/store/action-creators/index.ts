import * as UserActionCreators from './user-auth';
import * as AppActionCreators from './app';
import * as TracksActionCreators from './tracks';

export default {
  ...UserActionCreators,
  ...AppActionCreators,
  ...TracksActionCreators,
};
