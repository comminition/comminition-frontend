import { useMutation } from '@tanstack/react-query';
import comminition from 'apis/comminition';
import useToast from 'hooks/useToast';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setProfile } from 'redux/profileSlice';
import type { Profile } from 'types/comminition';

export interface State {
  part: string;
  major: string;
  address: string;
  email: string;
  skills: string[];
}

const patchProfile = async (userId: string, profileData: Profile) => {
  await comminition.modifyUserProfile(userId, profileData);
};

const useProfile = () => {
  // TODO: 코드 분리필요.
  const toast = useToast();
  const [userInput, setUserInput] = useState<State>({ part: '', major: '', address: '', email: '', skills: [] });
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

  // init state
  useEffect(() => {
    setUserInput({
      part: profile.field!,
      major: profile.major!,
      address: profile.local!,
      email: profile.email!,
      skills: profile.skills,
    });
  }, [profile.email, profile.field, profile.local, profile.major, profile.skills]);

  const handleSubmit = useCallback(() => {
    if (editMode) {
      mutate({
        nickname: profile.nickname,
        field: userInput.part,
        major: userInput.major,
        local: userInput.address,
        skills: userInput.skills,
        email: userInput.email,
        introduce: profile.introduce,
        github: profile.github,
        interested: profile.interested,
      });
    }
    setEditMode((prev) => !prev);
  }, [
    editMode,
    mutate,
    profile.github,
    profile.interested,
    profile.introduce,
    profile.nickname,
    userInput.address,
    userInput.email,
    userInput.major,
    userInput.part,
    userInput.skills,
  ]);

  return {
    userSkillInput,
    nickname: profile.nickname,
    profile,
    editMode,
    userInput,
    handleSubmit,
    setUserSkillInput,
    setUserInput,
  };
};

export default useProfile;
