import styles from './infoPage.module.scss';
import post from '../../assets/images/postbutton.png';

const InfoPage = () => {
  return (
    <div className={styles.infoPage}>
      <div className={styles.topDiv}>
        <p className={styles.filter}>정렬 | 최신 스크랩 좋아요</p>
        <button type="button" className={styles.postButton}>
          <img src={post} alt="post" />
        </button>
      </div>
      <div className={styles.midDiv}>
        <div className={styles.postBody}>음</div>
        <div className={styles.adDiv}>광고</div>
      </div>
      <div className={styles.pageSelect}>123</div>
    </div>
  );
};

export default InfoPage;
