import { ProfileIcon } from 'assets/svgs';
import GitHubCalendar from 'react-github-calendar';
import { useAppSelector } from 'redux/hooks';

import styles from './contributonBoard.module.scss';
import Profile from './Profile';

const ProfileBoard = () => {
  const profile = useAppSelector((state) => state.profile);

  return (
    <div className={styles.contributonBoard}>
      <h1>내 정보</h1>
      <div className={styles.content}>
        <Profile />
        <GitHubCalendar username={profile.nickname!} />
      </div>
    </div>
  );
};

export default ProfileBoard;
