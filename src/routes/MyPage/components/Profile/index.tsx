import { ProfileImage } from 'assets/svgs';
import RoundButton from 'components/UI/Buttons/RoundButton';
import { ChangeEvent, Dispatch, KeyboardEvent, MouseEvent, SetStateAction, useState } from 'react';

import styles from './profile.module.scss';

interface IProps {
  isEditMode: boolean;
  handleEditMode: Dispatch<SetStateAction<boolean>>;
}

const Profile = ({ isEditMode, handleEditMode }: IProps) => {
  const [part, setPart] = useState('Frontend Developer');
  const [major, setMajor] = useState('컴퓨터공학 전공');
  const [address, setAddress] = useState('땡땡시 땡땡구');
  const [email, setEmail] = useState('binbong@naver.com');
  const [skills, setSkills] = useState<string[]>(['Frontend', 'Java', 'Html', 'React.js']);
  const [skillInput, setSkillInput] = useState('');

  const handlePartInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPart(e.currentTarget.value);
  };
  const handleMajorInput = (e: ChangeEvent<HTMLInputElement>) => {
    setMajor(e.currentTarget.value);
  };
  const handleAddressInput = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.currentTarget.value);
  };
  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handleSkillInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSkillInput(e.currentTarget.value);
  };

  const handleSkillEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSkills((prev) => [...prev, skillInput]);
      setSkillInput('');
    }
  };

  // TODO: 유저 피드백 필요
  const removeSkill = (e: MouseEvent<HTMLButtonElement>) => {
    const eventTarget = e.target as HTMLButtonElement;
    setSkills((prev) => prev.filter((skill) => skill !== eventTarget.innerText));
  };

  const handleSubmit = () => {
    handleEditMode((prev) => !prev);
  };

  return (
    <div className={styles.profile}>
      <div className={styles.contents}>
        <div className={styles.profileImage}>
          <ProfileImage />
        </div>
        <dl className={styles.category}>
          <div className={styles.items}>
            <dt>닉네임</dt>
            <dd className={styles.nickname}>김땡</dd>
          </div>
          <div className={styles.items}>
            <dt>분야 </dt>
            {isEditMode ? (
              <input type="text" className={styles.part} value={part} onChange={handlePartInput} />
            ) : (
              <dd className={styles.part}>{part}</dd>
            )}
          </div>
          <div className={styles.items}>
            <dt>전공 </dt>
            {isEditMode ? <input type="text" value={major} onChange={handleMajorInput} /> : <dd>{major}</dd>}
          </div>
          <div className={styles.items}>
            <dt>지역</dt>
            {isEditMode ? <input type="text" value={address} onChange={handleAddressInput} /> : <dd>{address}</dd>}
          </div>
          <div className={styles.items}>
            <dt>이메일</dt>
            {isEditMode ? <input type="text" value={email} onChange={handleEmailInput} /> : <dd>{email}</dd>}
          </div>
        </dl>
      </div>
      <div className={styles.edit}>
        <button type="button" onClick={handleSubmit}>
          {isEditMode ? '수정 완료' : '프로필 수정하기'}
        </button>
        <div className={styles.type}>
          {skills.map((skill, i) => {
            const key = `${skill}-${i}`;
            return (
              <RoundButton
                size="auto"
                backgroundColor="transparent"
                height="36px"
                color="#172366"
                onClick={removeSkill}
                key={key}
              >
                {skill}
              </RoundButton>
            );
          })}
          {isEditMode && (
            <input
              type="text"
              className={styles.addSkill}
              placeholder="+ 직접 추가하기"
              onChange={handleSkillInput}
              onKeyDown={handleSkillEnter}
              value={skillInput}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
