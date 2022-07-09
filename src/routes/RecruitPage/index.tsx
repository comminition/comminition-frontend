import Main from './Main';
import Side from './Side';
import Pagenation from './Pagenation';

import styles from './recruitPage.module.scss';

const RecruitPage = () => {
  return (
    <>
      <div className={styles.content}>
        <Side />
        <div className={styles.divider} />
        <Main />
      </div>
      <Pagenation />
    </>
  );
};

export default RecruitPage;
