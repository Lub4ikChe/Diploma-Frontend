import { Dispatch } from 'redux';

import { HomeActionTypes, HomeAction } from '../types/home';

import { HomeItems } from '../../models/home';
import { Error } from '../../models/response/error';

import HomeService from '../../services/home-service';

export const setHomeItems = (items: HomeItems): HomeAction => {
  return {
    type: HomeActionTypes.SET_HOME_ITEMS,
    payload: items,
  };
};

export const setHomeLoading = (loading: boolean): HomeAction => {
  return {
    type: HomeActionTypes.SET_LOADING,
    payload: loading,
  };
};

export const setHomeError = (error: Error): HomeAction => {
  return {
    type: HomeActionTypes.SET_ERROR,
    payload: error,
  };
};

export const getHomeItems = () => async (dispatch: Dispatch<HomeAction>) => {
  try {
    dispatch(setHomeLoading(true));

    const response = await HomeService.fetchHomeItems();

    dispatch(setHomeItems(response.data));
    dispatch(setHomeError(null));
  } catch (error: any) {
    dispatch(setHomeError(error.response.data.message));
  } finally {
    dispatch(setHomeLoading(false));
  }
};
