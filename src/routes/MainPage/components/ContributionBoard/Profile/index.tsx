import { ProfileIcon } from 'assets/svgs';
import RoundButton from 'components/UI/Buttons/RoundButton';
import { useAppSelector } from 'redux/hooks';

import styles from './profile.module.scss';

const Profile = () => {
  const profile = useAppSelector((state) => state.profile);

  return (
    <div className={styles.profile}>
      <h1 className={styles.name}>
        <ProfileIcon /> <span>{profile.nickname || '김코딩'}</span>
      </h1>
      <p className={styles.field}>{profile.field || 'Frontend Developer'}</p>
      <p className={styles.major}>{profile.major || '컴퓨터공학 전공'}</p>
      <address className={styles.address}>{profile.local || '서울시 강남구'}</address>
      <div className={styles.skills}>
        {profile.skills?.map((skill) => (
          <RoundButton size="auto" backgroundColor="transparent" text={skill} />
        ))}
        {/* 밑의 코드는 추후 제거 */}
        <RoundButton size="auto" backgroundColor="transparent" text="Frontend" />
        <RoundButton size="auto" backgroundColor="transparent" text="Java" />
      </div>
    </div>
  );
};

export default Profile;
