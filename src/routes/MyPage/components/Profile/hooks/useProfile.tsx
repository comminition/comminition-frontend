import { useMutation } from '@tanstack/react-query';
import comminition from 'apis/comminition';
import useToast from 'hooks/useToast';
import { ChangeEvent, KeyboardEvent, MouseEvent, useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setProfile } from 'redux/profileSlice';
import type { Profile } from 'types/comminition';

interface State {
  part: string;
  major: string;
  address: string;
  email: string;
  skills: string[];
}

interface Action {
  type: 'INPUT' | 'REMOVE' | 'INIT';
  payload: {
    inputType: 'part' | 'major' | 'address' | 'email' | 'skills';
    value: string;
    skills?: string[];
  };
}

const patchProfile = async (userId: string, profileData: Profile) => {
  await comminition.modifyUserProfile(userId, profileData);
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'INPUT':
      if (action.payload.inputType === 'part') return { ...state, part: action.payload.value };
      if (action.payload.inputType === 'major') return { ...state, major: action.payload.value };
      if (action.payload.inputType === 'address') return { ...state, address: action.payload.value };
      if (action.payload.inputType === 'email') return { ...state, email: action.payload.value };
      // TODO: 스킬 아이템 중복 처리 필요
      if (action.payload.inputType === 'skills') return { ...state, skills: [...state.skills, action.payload.value] };
      break;
    case 'REMOVE':
      if (action.payload.inputType === 'skills')
        return { ...state, skills: state.skills.filter((skill) => skill !== action.payload.value) };
      break;
    case 'INIT':
      if (action.payload.inputType === 'skills') return { ...state, skills: [...action.payload.skills!] };
      break;
  }
  return { ...state };
};

const useProfile = () => {
  // TODO: 코드 분리필요.
  const toast = useToast();
  const profile = useAppSelector((state) => state.profile);
  const userId = useAppSelector((state) => state.login.userId);
  const reduxDispatch = useAppDispatch();
  const [editMode, setEditMode] = useState(false);
  const [userSkillInput, setUserSkillInput] = useState('');
  const { mutate } = useMutation<unknown, Error, Profile, unknown>(
    (profileData) => patchProfile(userId!, profileData),
    {
      onSuccess: (data, variable) => {
        toast({ status: 'success', message: '프로필 수정에 성공했습니다.' });
        reduxDispatch(setProfile(variable));
      },
      onError: () => {
        toast({ status: 'error', message: '프로필 수정에 실패했습니다.' });
      },
    },
  );

  const INITIAL_VALUE: State = useMemo(
    () => ({
      part: '',
      major: '',
      address: '',
      email: '',
      skills: [],
    }),
    [],
  );

  const [state, dispatch] = useReducer(reducer, INITIAL_VALUE);

  useEffect(() => {
    dispatch({ type: 'INPUT', payload: { inputType: 'part', value: profile.field! } });
    dispatch({ type: 'INPUT', payload: { inputType: 'major', value: profile.major! } });
    dispatch({ type: 'INPUT', payload: { inputType: 'address', value: profile.local! } });
    dispatch({ type: 'INPUT', payload: { inputType: 'email', value: profile.email! } });
    dispatch({ type: 'INIT', payload: { inputType: 'skills', skills: profile.skills, value: '' } });
  }, [profile]);

  const handlePartInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'INPUT', payload: { inputType: 'part', value: e.currentTarget.value } });
  }, []);
  const handleMajorInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'INPUT', payload: { inputType: 'major', value: e.currentTarget.value } });
  }, []);
  const handleAddressInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'INPUT', payload: { inputType: 'address', value: e.currentTarget.value } });
  }, []);
  const handleEmailInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'INPUT', payload: { inputType: 'email', value: e.currentTarget.value } });
  }, []);

  const handleSkillInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUserSkillInput(e.currentTarget.value);
  }, []);

  const handleSkillEnter = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.nativeEvent.isComposing) return;
      if (e.key === 'Enter') {
        dispatch({ type: 'INPUT', payload: { inputType: 'skills', value: userSkillInput } });
        setUserSkillInput('');
      }
    },
    [userSkillInput],
  );

  const handleRemoveSkill = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const eventTarget = e.target as HTMLButtonElement;
    dispatch({ type: 'REMOVE', payload: { inputType: 'skills', value: eventTarget.innerText } });
  }, []);

  const handleSubmit = () => {
    if (editMode) {
      mutate({
        nickname: profile.nickname,
        field: state.part,
        major: state.major,
        local: state.address,
        skills: state.skills,
        email: state.email,
        introduce: profile.introduce,
        github: profile.github,
        interested: profile.interested,
      });
    }
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
    userSkillInput,
    nickname: profile.nickname,
    editMode,
  };
};

export default useProfile;
