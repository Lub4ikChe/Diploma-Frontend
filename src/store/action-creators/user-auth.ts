import { Dispatch } from 'redux';

import UserService from '../../services/user-service';

import { User } from '../../models/user';
import { AppAction } from '../types/app';
import { UserAuthAction, UserAuthActionTypes } from '../types/user-auth';
import { setAppLoading } from './app';

type Error = null | string | string[];

const setLoading = (loading: boolean): UserAuthAction => {
  return {
    type: UserAuthActionTypes.SET_LOADING,
    payload: loading,
  };
};

const setIsAuth = (isAuth: boolean): UserAuthAction => {
  return {
    type: UserAuthActionTypes.SET_IS_AUTH,
    payload: isAuth,
  };
};

const setError = (error: Error): UserAuthAction => {
  return {
    type: UserAuthActionTypes.SET_ERROR,
    payload: error,
  };
};

const setUser = (user: User | null): UserAuthAction => {
  return {
    type: UserAuthActionTypes.SET_USER,
    payload: user,
  };
};

export const signIn =
  (email: string, password: string) => async (dispatch: Dispatch<UserAuthAction>) => {
    try {
      dispatch(setLoading(true));

      const signInResponse = await UserService.signIn(email, password);
      localStorage.setItem('token', signInResponse.data.accessToken);
      const getMeResponse = await UserService.getMe();

      dispatch(setIsAuth(true));
      dispatch(setUser(getMeResponse.data));
      dispatch(setError(null));
    } catch (error: any) {
      dispatch(setError(error.response.data.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const signOut = () => async (dispatch: Dispatch<UserAuthAction>) => {
  await UserService.signOut();
  localStorage.removeItem('token');

  dispatch(setIsAuth(false));
  dispatch(setUser(null));
};

export const checkIsAuth = () => async (dispatch: Dispatch<UserAuthAction | AppAction>) => {
  dispatch(setAppLoading(true));

  const checkAuthResponse = await UserService.checkAuth();
  localStorage.setItem('token', checkAuthResponse.data.accessToken);
  const getMeResponse = await UserService.getMe();

  dispatch(setIsAuth(true));
  dispatch(setUser(getMeResponse.data));
  dispatch(setAppLoading(false));
};
