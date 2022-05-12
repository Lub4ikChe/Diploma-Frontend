/* eslint-disable */
import axios, { AxiosRequestConfig } from 'axios';

import { UserAuthResponse } from '../models/response/user-auth-response';

export const API_URL = process.env.REACT_APP_API_URL;

const http = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

$api.interceptors.response.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && originalRequest && !originalRequest._isRetry) {
      originalRequest._isRetry = true;
      const response = await http.get<UserAuthResponse>('/auth/refresh');
      localStorage.setItem('token', response.data.accessToken);
      return $api.request(originalRequest);
    }
    throw error;
  },
);

export { $api, http };
