import styles from './profile.module.scss';
import { ProfileImage } from 'assets/svgs';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileImage}>
        <ProfileImage />
      </div>
      <div className={styles.category}>
        <div className={styles.items}>
          <span>닉네임</span>
          <span className={styles.nickname}>김땡</span>
        </div>
        <div className={styles.items}>
          <span>분야 </span>
          <span className={styles.part}>Frontend Developer</span>
        </div>
        <div className={styles.items}>
          <span>전공 </span>
          <span>컴퓨터공학 전공</span>
        </div>
        <div className={styles.items}>
          <span>지역</span>
          <span>땡땡시 땡땡구</span>
        </div>
        <div className={styles.items}>
          <span>이메일</span>
          <span>binbong@naver.com</span>
        </div>
      </div>
      <div className={styles.editDiv}>
        <button type="button">프로필 수정하기</button>
        <div className={styles.type}>
          <div className={styles.div}>Frontend</div>
          <div className={styles.div}>Java</div>
          <div className={styles.div}>Html</div>
          <div className={styles.div}>React.js</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
