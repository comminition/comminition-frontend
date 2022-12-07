import { useDispatch,useSelector } from 'react-redux';
import { login } from 'redux/authSlice';
import type { RootState } from 'redux/store';

const { localStorage } = window;

const useAuth = () => {
  const storedToken = useSelector((state: RootState) => state.login.accessToken);
  const localStorageToken = localStorage.getItem('token');
  const dispatch = useDispatch();

  if (!storedToken || localStorageToken) dispatch(login(localStorageToken));

  const setAccessToken = (accessToken: string | null) => {
    if (!accessToken) return;
    localStorage.setItem('token', accessToken);
    dispatch(login(accessToken));
  };

  return {
    setAccessToken,
    storedToken,
  };
};

export default useAuth;
