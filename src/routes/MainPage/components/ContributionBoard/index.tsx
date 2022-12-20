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
        {/* FIXME: 추후 email => username으로 변경 필요 */}
        {profile.email && <GitHubCalendar username={profile.email} />}
      </div>
    </div>
  );
};

export default ProfileBoard;
