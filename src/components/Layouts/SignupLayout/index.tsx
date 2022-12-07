import { Outlet, useLocation } from 'react-router-dom';
import ProgressBar from 'routes/SignupPage/ProgressBar';

import styles from './signupLayout.module.scss';

const index: { [index: string]: 1 | 2 | 3 } = {
  '/signup/getInfo': 1,
  '/signup/emailValidation': 2,
  '/signup/github': 3,
};

const SignupLayout = () => {
  const location = useLocation();

  return (
    <div className={styles.layout}>
      <ProgressBar progressed={index[location.pathname]} />
      <Outlet />
    </div>
  );
};

export default SignupLayout;
