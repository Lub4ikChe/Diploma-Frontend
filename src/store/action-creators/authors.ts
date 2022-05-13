import { Dispatch } from 'redux';

import { AuthorsActionTypes, AuthorsAction } from '../types/authors';
import { User } from '../../models/user';
import { UserWithLatestMedia } from '../../models/user/user-with-latest-media';
import { Error } from '../../models/response/error';

import AuthorsService from '../../services/authors-service';

export const setAuthors = (authors: User[]): AuthorsAction => {
  return {
    type: AuthorsActionTypes.SET_AUTHORS,
    payload: authors,
  };
};

export const setAuthorsTotal = (total: number): AuthorsAction => {
  return {
    type: AuthorsActionTypes.SET_TOTAL,
    payload: total,
  };
};

export const setAuthorsLoading = (loading: boolean): AuthorsAction => {
  return {
    type: AuthorsActionTypes.SET_LOADING,
    payload: loading,
  };
};

export const setAuthorsError = (error: Error): AuthorsAction => {
  return {
    type: AuthorsActionTypes.SET_ERROR,
    payload: error,
  };
};

export const setSpecificAuthor = (author: UserWithLatestMedia): AuthorsAction => {
  return {
    type: AuthorsActionTypes.SET_SPECIFIC_AUTHOR,
    payload: author,
  };
};

export const getAuthors =
  (page = 0, limit = 10, search = '') =>
  async (dispatch: Dispatch<AuthorsAction>) => {
    try {
      dispatch(setAuthorsLoading(true));

      const response = await AuthorsService.fetchAuthors(page, limit, search);

      dispatch(setAuthors(response.data[0]));
      dispatch(setAuthorsTotal(response.data[1]));
      dispatch(setAuthorsError(null));
    } catch (error: any) {
      dispatch(setAuthorsError(error.response.data.message));
    } finally {
      dispatch(setAuthorsLoading(false));
    }
  };

export const getAuthor = (authorId: string) => async (dispatch: Dispatch<AuthorsAction>) => {
  try {
    dispatch(setAuthorsLoading(true));

    const response = await AuthorsService.getAuthor(authorId);

    dispatch(setSpecificAuthor(response.data));
    dispatch(setAuthorsError(null));
  } catch (error: any) {
    dispatch(setAuthorsError(error.response.data.message));
  } finally {
    dispatch(setAuthorsLoading(false));
  }
};
