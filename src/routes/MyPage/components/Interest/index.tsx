import styles from './interest.module.scss';

const Interest = () => {
  return (
    <div>
      <div className={styles.interest}>
        <span>관심직군</span>
        <div className={styles.interestBody}>
          <div className={styles.interestBodyItems}>
            <p>직군1</p>
            <p>Google</p>
          </div>
          <hr />
          <div className={styles.interestBodyItems}>
            <p>직군2</p>
            <p>NAVER</p>
          </div>
          <hr />
          <div className={styles.interestBodyItems}>
            <p>직군3</p>
            <p>Kakao</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interest;
