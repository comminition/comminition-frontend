import { ProfileImage } from 'assets/svgs';
import RoundButton from 'components/UI/Buttons/RoundButton';

import styles from './profile.module.scss';

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
          <RoundButton size="auto" backgroundColor="transparent" height="36px" color="#172366">
            Frontend
          </RoundButton>
          <RoundButton size="auto" backgroundColor="transparent" height="36px" color="#172366">
            Java
          </RoundButton>
          <RoundButton size="auto" backgroundColor="transparent" height="36px" color="#172366">
            Html
          </RoundButton>
          <RoundButton size="auto" backgroundColor="transparent" height="36px" color="#172366">
            React.js
          </RoundButton>
        </div>
      </div>
    </div>
  );
};

export default Profile;
