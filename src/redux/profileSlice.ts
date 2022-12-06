import { createListenerMiddleware, createSlice } from '@reduxjs/toolkit';
import authSlice, { login } from './authSlice';

export interface Profile {
  nickname: string | null;
  field: string | null;
  major: string | null;
  local: string | null;
  skills: string[];
  email: string | null;
  introduce: string | null;
  interested: string[];
  github: string | null;
}

const initialState: Profile = {
  nickname: null,
  field: null,
  major: null,
  local: null,
  skills: [],
  email: null,
  introduce: null,
  interested: [],
  github: null,
};

export const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {},
});

export const {} = profileSlice.actions;

export default profileSlice.reducer;
