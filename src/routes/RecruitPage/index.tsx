import Main from './Main';
import Pagenation from './Pagenation';
import styles from './recruitPage.module.scss';
import Side from './Side';

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
