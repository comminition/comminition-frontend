import useAuth from 'hooks/useAuth';
import { useEffect } from 'react';
import { useNavigate,useSearchParams } from 'react-router-dom';

const RedirectPage = () => {
  const navigate = useNavigate();
  const { storedToken, setAccessToken } = useAuth();
  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get('accessToken');

  if (accessToken) {
    setAccessToken(accessToken);
  }

  useEffect(() => {
    if (storedToken) {
      navigate('/', { replace: true });
    }
  }, [navigate, storedToken]);

  return <div />;
};

export default RedirectPage;
