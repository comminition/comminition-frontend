import RoundButton from 'components/UI/Buttons/RoundButton';
import useToast from 'hooks/useToast';
import { ChangeEvent, Dispatch, KeyboardEvent, MouseEvent, SetStateAction, useCallback } from 'react';

import { State } from '../../hooks/useProfile';
import styles from './skillInput.module.scss';

interface IProps {
  editMode: boolean;
  userInput: State;
  setUserInput: Dispatch<SetStateAction<State>>;
  userSkillInput: string;
  setUserSkillInput: Dispatch<SetStateAction<string>>;
}

const SkillInput = ({ editMode, setUserInput, setUserSkillInput, userInput, userSkillInput }: IProps) => {
  const toast = useToast();

  const handleRemoveSkill = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (!editMode) return;
      const eventTarget = e.target as HTMLButtonElement;
      setUserInput((prev) => ({
        ...prev,
        skills: prev.skills.filter((skillItem) => eventTarget.innerText !== skillItem),
      }));
    },
    [editMode, setUserInput],
  );

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUserSkillInput(e.currentTarget.value);
    },
    [setUserSkillInput],
  );

  const handleRegisterSkill = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.nativeEvent.isComposing || e.key !== 'Enter' || userInput.skills.length > 3) return;
      if (userInput.skills.some((skill) => skill === userSkillInput)) {
        toast({ message: '이미 존재하는 스킬입니다', status: 'warn' });
        return;
      }
      setUserInput((prev) => ({ ...prev, skills: [...prev.skills, userSkillInput] }));
      setUserSkillInput('');
    },
    [setUserInput, setUserSkillInput, toast, userInput.skills, userSkillInput],
  );

  const skillList = userInput.skills.map((skill, i) => {
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
  });

  return (
    <div className={styles.skills}>
      {skillList}
      {editMode && (
        <input
          type="text"
          className={styles.addSkill}
          disabled={userInput.skills.length >= 3}
          placeholder="+ 직접 추가하기"
          onChange={handleInputChange}
          onKeyDown={handleRegisterSkill}
          value={userSkillInput}
        />
      )}
    </div>
  );
};

export default SkillInput;
