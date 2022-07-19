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
