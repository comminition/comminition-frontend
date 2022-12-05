import { AxiosPromise } from 'axios';
import { ICreateUser, IloginResponse } from 'types/comminition';
import Axios from '../utils/axios';

export default {
  createUser(nickname: string, email: string, password: string): AxiosPromise<ICreateUser> {
    return Axios({
      url: '/v1/user',
      method: 'post',
      data: {
        email,
        nickname,
        password,
      },
    });
  },

  certificateEmail(email: string) {
    return Axios({
      url: '/v1/cert',
      method: 'post',
      data: {
        email,
      },
    });
  },

  sendCertificationCode(email: string, code: string) {
    return Axios({
      url: '/v1/cert',
      method: 'put',
      data: {
        email,
        code,
      },
    });
  },

  loginUser(email: string | undefined, password: string | undefined) {
    return Axios({
      url: '/v1/user',
      method: 'put',
      data: {
        email,
        password,
      },
    });
  },

  getUserProfile(id: string) {
    return Axios({
      url: `/v1/user/${id}`,
    });
  },

  login(email: string, password: string): AxiosPromise<IloginResponse> {
    return Axios({
      url: '/v1/user',
      method: 'put',
      data: {
        email,
        password,
      },
    });
  },

  githubLogin() {
    return Axios({
      url: '/v1/github/start',
      method: 'get',
    });
  },

  githubFinish() {
    return Axios({
      url: '/v1/github/start',
      method: 'get',
    });
  },
};
