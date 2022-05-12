/* eslint-disable */
import axios, { AxiosRequestConfig } from 'axios';

export const API_URL = process.env.REACT_APP_API_URL;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

const http = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export { $api, http };
