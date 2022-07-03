import GitHubCalendar from 'react-github-calendar';

import styles from './contributonBoard.module.scss';

import { ProfileIcon } from 'assets/svgs';

const ProfileBoard = () => {
  const username: string = process.env.REACT_APP_USERNAME ?? '';

  return (
    <div className={styles.contributonBoard}>
      <h1>내 잔디밭</h1>
      <div className={styles.content}>
        <div className={styles.profile}>
          <div className={styles.primary}>
            <div className={styles.name}>
              <ProfileIcon className={styles.icon} />
              김땡땡
            </div>
            컴퓨터공학 <br />
            60182135 <br />
          </div>
          <div className={styles.secondary}>
            <address>용인시 처인구</address>
            frontend
          </div>
        </div>
        <GitHubCalendar username={username} />
      </div>
    </div>
  );
};

export default ProfileBoard;
