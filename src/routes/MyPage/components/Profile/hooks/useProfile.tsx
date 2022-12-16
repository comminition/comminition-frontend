import { ChangeEvent, KeyboardEvent, MouseEvent, useReducer, useState } from 'react';
import { useAppSelector } from 'redux/hooks';

interface State {
  part: string;
  major: string;
  address: string;
  email: string;
  skills: string[];
}

interface Action {
  type: 'INPUT' | 'REMOVE';
  payload: {
    inputType: 'part' | 'major' | 'address' | 'email' | 'skills';
    value: string;
  };
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'INPUT':
      if (action.payload.inputType === 'part') return { ...state, part: action.payload.value };
      if (action.payload.inputType === 'major') return { ...state, major: action.payload.value };
      if (action.payload.inputType === 'address') return { ...state, address: action.payload.value };
      if (action.payload.inputType === 'email') return { ...state, email: action.payload.value };
      if (action.payload.inputType === 'skills') return { ...state, skills: [...state.skills, action.payload.value] };
      break;
    case 'REMOVE':
      if (action.payload.inputType === 'skills')
        return { ...state, skills: state.skills.filter((skill) => skill !== action.payload.value) };
      break;
  }
  return { ...state };
};

const useProfile = () => {
  const profile = useAppSelector((state) => state.profile);
  const [editMode, setEditMode] = useState(false);
  const INITIAL_VALUE = {
    part: profile.field || '',
    major: profile.major || '',
    address: profile.local || '',
    email: profile.email || '',
    skills: profile.skills,
  };
  const [state, dispatch] = useReducer(reducer, INITIAL_VALUE);
  const [skill, setSkill] = useState('');

  const handlePartInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'INPUT', payload: { inputType: 'part', value: e.currentTarget.value } });
  };
  const handleMajorInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'INPUT', payload: { inputType: 'major', value: e.currentTarget.value } });
  };
  const handleAddressInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'INPUT', payload: { inputType: 'address', value: e.currentTarget.value } });
  };
  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'INPUT', payload: { inputType: 'email', value: e.currentTarget.value } });
  };

  const handleSkillInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSkill(e.currentTarget.value);
  };

  const handleSkillEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch({ type: 'INPUT', payload: { inputType: 'skills', value: skill } });
      setSkill('');
    }
  };

  const handleRemoveSkill = (e: MouseEvent<HTMLButtonElement>) => {
    const eventTarget = e.target as HTMLButtonElement;
    dispatch({ type: 'REMOVE', payload: { inputType: 'skills', value: eventTarget.innerText } });
  };

  const handleSubmit = () => {
    setEditMode((prev) => !prev);
  };

  return {
    handlePartInput,
    handleMajorInput,
    handleAddressInput,
    handleEmailInput,
    handleSkillInput,
    handleSkillEnter,
    handleRemoveSkill,
    handleSubmit,
    state,
    skill,
    nickname: profile.nickname,
    editMode,
  };
};

export default useProfile;
