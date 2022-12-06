import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IComminitionAxiosError } from 'types/comminition';
import store from 'redux/store';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  timeout: 4000,
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const { accessToken } = store.getState().login;
    if (config.headers) config.headers.authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: IComminitionAxiosError) => {
    return Promise.reject(new Error(error.response.data.errorMessage));
  },
);

export default instance;
