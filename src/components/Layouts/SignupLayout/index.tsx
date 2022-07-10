import { Outlet } from 'react-router-dom';

import ProgressBar from 'routes/SignupPage/ProgressBar';
import styles from './signupLayout.module.scss';

const SignupLayout = () => {
  return (
    <div className={styles.layout}>
      <ProgressBar progressed={1} />
      <Outlet />
    </div>
  );
};

export default SignupLayout;
