import { AxiosPromise } from 'axios';
import type {
  ICreateUser,
  IGetInfoPostContentResponse,
  IGetInfoPostListResponse,
  IGetInquiryPostContentResponse,
  IGetInquiryPostListResponse,
  IGetProjectContentResponse,
  IGetProjectList,
  IGetUserProfileResponse,
  IloginResponse,
  Profile,
} from 'types/comminition';

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

  getUserProfile(id: string): AxiosPromise<IGetUserProfileResponse> {
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

  /**
   *  전체 info글을 조회합니다.
   * @param skip 스킵할 게시물 갯수
   * @param limit 표현할 게시물 갯수
   * @param sort 정렬할 기준 - 기본값 date
   * @returns
   */
  getInfoPostList(
    skip: number,
    limit: number,
    sorted: 'like' | 'date' | 'scrap' = 'date',
  ): AxiosPromise<IGetInfoPostListResponse> {
    return Axios({
      url: '/v1/info',
      method: 'get',
      params: {
        skip,
        limit,
        sorted,
      },
    });
  },

  getInfoPostContent(id: string): AxiosPromise<IGetInfoPostContentResponse> {
    return Axios({
      url: `/v1/info/${id}`,
      method: 'get',
    });
  },

  getInquiryPostList(
    skip: number,
    limit: number,
    sorted: 'like' | 'date' | 'scrap' = 'date',
  ): AxiosPromise<IGetInquiryPostListResponse> {
    return Axios({
      url: '/v1/qna',
      method: 'get',
      params: {
        skip,
        limit,
        sorted,
      },
    });
  },

  getInquiryPostContent(id: string): AxiosPromise<IGetInquiryPostContentResponse> {
    return Axios({
      url: `/v1/qna/${id}`,
      method: 'get',
    });
  },

  /**
   *  전체 project글을 조회합니다.
   * @param skip 스킵할 게시물 갯수
   * @param limit 표현할 게시물 갯수
   * @param sort 정렬할 기준 - 기본값 date
   * @returns
   */
  getProjectList(
    skip: number,
    limit: number,
    sorted: 'like' | 'date' | 'scrap' = 'date',
  ): AxiosPromise<IGetProjectList> {
    return Axios({
      url: '/v1/project',
      method: 'get',
      params: {
        skip,
        limit,
        sorted,
      },
    });
  },

  /**
   * 특정 project 글을 조회합니다.
   * @param id project 글 id
   * @returns
   */
  getProjectContent(id: string): AxiosPromise<IGetProjectContentResponse> {
    return Axios({
      url: `/v1/project/${id}`,
      method: 'get',
    });
  },

  /**
   *
   * @param userId 유저아이디
   * @param profileData 프로필 데이터
   * @returns
   */
  modifyUserProfile(userId: string, profileData: Profile): AxiosPromise {
    return Axios({
      url: `/v1/user/${userId}`,
      method: 'put',
      data: {
        nickname: profileData.nickname,
        field: profileData.field,
        major: profileData.major,
        local: profileData.local,
        skills: profileData.skills,
        introduce: profileData.introduce,
        interested: profileData.interested,
      },
    });
  },
};
