import * as UserActionCreators from './user-auth';
import * as AppActionCreators from './app';

export default {
  ...UserActionCreators,
  ...AppActionCreators,
};
