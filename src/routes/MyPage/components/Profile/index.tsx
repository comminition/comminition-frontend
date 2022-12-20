import { ProfileImage } from 'assets/svgs';
import RoundButton from 'components/UI/Buttons/RoundButton';

import Input from './components/Input';
import useProfile from './hooks/useProfile';
import styles from './profile.module.scss';

const Profile = () => {
  const { setUserInput, handleSubmit, userSkillInput, nickname, editMode, profile } = useProfile();

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
                placeholder="이메일을 입력해주세요"
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
                placeholder="이메일을 입력해주세요"
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
                placeholder="이메일을 입력해주세요"
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
          {/* {state.skills.map((skill, i) => {
            const key = `${skill}-${i}`;
            return (
              <RoundButton
                size="auto"
                backgroundColor="transparent"
                height="36px"
                color="#172366"
                onClick={handleRemoveSkill}
                key={key}
              >
                {skill}
              </RoundButton>
            );
          })} */}
          {/* {editMode && (
            <input
              type="text"
              className={styles.addSkill}
              placeholder="+ 직접 추가하기"
              // onChange={handleSkillInput}
              // onKeyDown={handleSkillEnter}
              value={userSkillInput}
            />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
