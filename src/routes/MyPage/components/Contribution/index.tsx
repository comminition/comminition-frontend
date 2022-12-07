import { MyPageRightArrow } from 'assets/svgs';
import GitHubCalendar from 'react-github-calendar';

import styles from './contribution.module.scss';

const Contribution = () => {
  const username: string = process.env.REACT_APP_USERNAME ?? '';
  return (
    <div>
      <div className={styles.contribution}>
        <GitHubCalendar username={username} />
        <button type="button">
          <p>Github 페이지로 </p>
          <MyPageRightArrow />
        </button>
      </div>
    </div>
  );
};

export default Contribution;
