import { ProfileImage } from 'assets/svgs';
import RoundButton from 'components/UI/Buttons/RoundButton';

import useProfile from './hooks/useProfile';
import styles from './profile.module.scss';

const Profile = () => {
  const {
    handleAddressInput,
    handleEmailInput,
    handleMajorInput,
    handlePartInput,
    handleSkillEnter,
    handleSkillInput,
    handleRemoveSkill,
    handleSubmit,
    setIsComposing,
    state,
    userSkillInput,
    nickname,
    editMode,
  } = useProfile();

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
              <input
                type="text"
                placeholder="입력해주세요"
                className={styles.part}
                value={state.part}
                onChange={handlePartInput}
              />
            ) : (
              <dd className={styles.part}>{state.part}</dd>
            )}
          </div>
          <div className={styles.items}>
            <dt>전공 </dt>
            {editMode ? (
              <input type="text" placeholder="입력해주세요" value={state.major} onChange={handleMajorInput} />
            ) : (
              <dd>{state.major}</dd>
            )}
          </div>
          <div className={styles.items}>
            <dt>지역</dt>
            {editMode ? (
              <input type="text" placeholder="입력해주세요" value={state.address} onChange={handleAddressInput} />
            ) : (
              <dd>{state.address}</dd>
            )}
          </div>
          <div className={styles.items}>
            <dt>이메일</dt>
            {editMode ? (
              <input type="text" placeholder="입력해주세요" value={state.email} onChange={handleEmailInput} />
            ) : (
              <dd>{state.email}</dd>
            )}
          </div>
        </dl>
      </div>
      <div className={styles.edit}>
        <button type="button" onClick={handleSubmit}>
          {editMode ? '수정 완료' : '프로필 수정하기'}
        </button>
        <div className={styles.type}>
          {state.skills.map((skill, i) => {
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
          })}
          {editMode && (
            <input
              type="text"
              className={styles.addSkill}
              placeholder="+ 직접 추가하기"
              onChange={handleSkillInput}
              onKeyDown={handleSkillEnter}
              onCompositionStart={() => setIsComposing(true)}
              onCompositionEnd={() => setIsComposing(false)}
              value={userSkillInput}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
