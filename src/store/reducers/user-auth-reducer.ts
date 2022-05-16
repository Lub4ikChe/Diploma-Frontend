import { UserAuthState, UserAuthAction, UserAuthActionTypes } from '../types/user-auth';

const initialState: UserAuthState = {
  isAuth: false,
  user: null,
  loading: false,
  error: null,
  showActivateAccount: false,
};

export const userAuthReducer = (state = initialState, action: UserAuthAction): UserAuthState => {
  switch (action.type) {
    case UserAuthActionTypes.SET_IS_AUTH:
      return { ...state, isAuth: action.payload };
    case UserAuthActionTypes.SET_USER:
      return { ...state, user: action.payload };
    case UserAuthActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case UserAuthActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    case UserAuthActionTypes.SET_SHOW_ACTIVATE_ACCOUNT:
      return { ...state, showActivateAccount: action.payload };
    default:
      return state;
  }
};
