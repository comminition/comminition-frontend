import type { RootState } from 'redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { login } from 'redux/authSlice';

const useAuth = () => {
  const storedToken = useSelector((state: RootState) => state.login.accessToken);
  const dispatch = useDispatch();

  const setAccessToken = (accessToken: string | null) => {
    if (!accessToken) return;
    dispatch(login(accessToken));
  };

  return {
    setAccessToken,
    storedToken,
  };
};

export default useAuth;
