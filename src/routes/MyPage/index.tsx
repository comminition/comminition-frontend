import { useState } from 'react';

import Activity from './components/Activity';
import Contribution from './components/Contribution';
import Explanation from './components/Explanation';
import Interest from './components/Interest';
import Profile from './components/Profile';
import styles from './myPage.module.scss';

const MyPage = () => {
  const [isEditMode, setIsEditMode] = useState(true);

  return (
    <div className={styles.myPage}>
      <div className={styles.profile}>
        <Profile isEditMode={isEditMode} handleEditMode={setIsEditMode} />
      </div>
      <div className={styles.underProfile}>
        <Explanation />
        <Interest />
      </div>
      <div className={styles.contribution}>
        <Contribution />
      </div>
      <div className={styles.activity}>
        <Activity />
      </div>
      <div className={styles.button}>
        <button type="button">계정 탈퇴하기</button>
      </div>
    </div>
  );
};

export default MyPage;
