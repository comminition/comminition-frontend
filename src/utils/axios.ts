import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IComminitionAxiosError } from 'types/comminition';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  timeout: 2000,
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
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
