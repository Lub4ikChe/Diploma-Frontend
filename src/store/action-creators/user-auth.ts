import { Dispatch } from 'redux';

import UserService from '../../services/user-service';

import { User } from '../../models/user';
import { AppAction } from '../types/app';
import { UserAuthAction, UserAuthActionTypes } from '../types/user-auth';
import { Error } from '../../models/response/error';

import { setAppLoading } from './app';

const setAuthLoading = (loading: boolean): UserAuthAction => {
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

const setAuthError = (error: Error): UserAuthAction => {
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
      dispatch(setAuthLoading(true));

      const signInResponse = await UserService.signIn(email, password);
      localStorage.setItem('token', signInResponse.data.accessToken);
      const getMeResponse = await UserService.getMe();

      dispatch(setIsAuth(true));
      dispatch(setUser(getMeResponse.data));
      dispatch(setAuthError(null));
    } catch (error: any) {
      dispatch(setAuthError(error.response.data.message));
    } finally {
      dispatch(setAuthLoading(false));
    }
  };

export const signOut = () => async (dispatch: Dispatch<UserAuthAction>) => {
  await UserService.signOut();
  localStorage.removeItem('token');

  dispatch(setIsAuth(false));
  dispatch(setUser(null));
};

export const checkIsAuth = () => async (dispatch: Dispatch<UserAuthAction | AppAction>) => {
  try {
    dispatch(setAppLoading(true));

    const checkAuthResponse = await UserService.checkAuth();
    localStorage.setItem('token', checkAuthResponse.data.accessToken);
    const getMeResponse = await UserService.getMe();

    dispatch(setIsAuth(true));
    dispatch(setUser(getMeResponse.data));
  } catch {
    localStorage.removeItem('token');
    dispatch(setIsAuth(false));
    dispatch(setUser(null));
  } finally {
    dispatch(setAppLoading(false));
  }
};
