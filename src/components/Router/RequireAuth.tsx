import { Navigate, Outlet } from 'react-router-dom';
import { login } from 'redux/authSlice';
import { useAppDispatch } from 'redux/hooks';

const { localStorage } = window;

const RequireAuth = () => {
  const storedToken = localStorage.getItem('token');
  const dispatch = useAppDispatch();

  if (!storedToken) return <Navigate to="/login" />;

  dispatch(login(storedToken));
  return <Outlet />;
};

export default RequireAuth;
