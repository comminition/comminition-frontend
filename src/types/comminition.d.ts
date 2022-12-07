import { AxiosError } from 'axios';

interface ICreateUser extends IComminitionResponse {
  id: string;
  nickname: string;
  email: string;
}

interface IComminitionAxiosError extends AxiosError {
  response: {
    data: {
      errorCode: string;
      errorMessage: string;
      statusCode: number;
    };
  };
}

interface Ilogin {
  email: string;
  password: string;
}

interface IloginResponse {
  token: string;
}

interface IGetUserProfileResponse {
  profile: {
    nickname: string | null;
    field: string | null;
    major: string | null;
    local: string | null;
    skills: string[];
    email: string | null;
    introduce: string | null;
    interested: string[];
    github: string | null;
  };
}

interface IGetInfoPostList {
  all: string[];
}

interface IGetInfoPostListResponse extends IGetInfoPostList {
  nextFrom: number;
  count: number;
}

interface IGetInfoPostContentResponse {
  info: {
    _id: string;
    title: string;
    content: string;
    writer: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  comments: number;
  scraps: number;
  likes: number;
}

interface IGetInquiryPostList {
  all: string[];
}

interface IGetInquiryPostListResponse extends IGetInfoPostList {
  nextFrom: number;
  count: number;
}

interface IGetInquiryPostContentResponse {
  info: {
    _id: string;
    title: string;
    content: string;
    writer: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  comments: number;
  scraps: number;
  likes: number;
}
