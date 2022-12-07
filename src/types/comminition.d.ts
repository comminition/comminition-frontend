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
