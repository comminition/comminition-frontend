/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import comminition from 'apis/comminition';

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

export const loadUserProfile = createAsyncThunk('profileSlice/loadUserProfile', async (userId: string) => {
  const {
    data: { profile },
  } = await comminition.getUserProfile(userId);
  return profile;
});

export const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    setProfile: (state, action: { payload: Profile }) => {
      state.field = action.payload.field;
      state.major = action.payload.major;
      state.local = action.payload.local;
      state.skills = action.payload.skills;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadUserProfile.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.field = action.payload.field;
      state.github = action.payload.github;
      state.interested = action.payload.interested;
      state.introduce = action.payload.introduce;
      state.local = action.payload.local;
      state.major = action.payload.major;
      state.nickname = action.payload.nickname;
      state.skills = action.payload.skills;
    });
  },
});

export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;
