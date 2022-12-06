import { Navigate, Outlet } from 'react-router-dom';
import { useAppDispatch } from 'redux/hooks';
import { login } from 'redux/authSlice';

const { localStorage } = window;

const RequireAuth = () => {
  const storedToken = localStorage.getItem('token');
  const dispatch = useAppDispatch();

  if (!storedToken) return <Navigate to="/login" />;

  dispatch(login(storedToken));
  return <Outlet />;
};

export default RequireAuth;
