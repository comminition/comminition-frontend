import { ProfileImage } from 'assets/svgs';

import SkillInput from './components/SkillInput';
import Input from './components/TextInput';
import useProfile from './hooks/useProfile';
import styles from './profile.module.scss';

const Profile = () => {
  const { setUserInput, handleSubmit, setUserSkillInput, userInput, userSkillInput, nickname, editMode, profile } =
    useProfile();

  return (
    <div className={styles.profile}>
      <div className={styles.contents}>
        <div className={styles.profileImage}>
          <ProfileImage />
        </div>
        <dl className={styles.category}>
          <div className={styles.items}>
            <dt>닉네임</dt>
            <dd className={styles.nickname}>{nickname}</dd>
          </div>
          <div className={styles.items}>
            <dt>분야 </dt>
            {editMode ? (
              <Input
                type="part"
                placeholder="분야를 입력해주세요"
                onChange={setUserInput}
                initialValue={profile.field || ''}
              />
            ) : (
              <dd className={styles.part}>{profile.field}</dd>
            )}
          </div>
          <div className={styles.items}>
            <dt>전공 </dt>
            {editMode ? (
              <Input
                type="major"
                placeholder="전공을 입력해주세요"
                onChange={setUserInput}
                initialValue={profile.major || ''}
              />
            ) : (
              <dd>{profile.major}</dd>
            )}
          </div>
          <div className={styles.items}>
            <dt>지역</dt>
            {editMode ? (
              <Input
                type="address"
                placeholder="지역을 입력해주세요"
                onChange={setUserInput}
                initialValue={profile.local || ''}
              />
            ) : (
              <dd>{profile.local}</dd>
            )}
          </div>
          <div className={styles.items}>
            <dt>이메일</dt>
            {editMode ? (
              <Input
                type="email"
                placeholder="이메일을 입력해주세요"
                onChange={setUserInput}
                initialValue={profile.email || ''}
              />
            ) : (
              <dd>{profile.email}</dd>
            )}
          </div>
        </dl>
      </div>
      <div className={styles.edit}>
        <button type="button" onClick={handleSubmit}>
          {editMode ? '수정 완료' : '프로필 수정하기'}
        </button>
        <div className={styles.type}>
          <SkillInput
            editMode={editMode}
            setUserInput={setUserInput}
            setUserSkillInput={setUserSkillInput}
            userInput={userInput}
            userSkillInput={userSkillInput}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
