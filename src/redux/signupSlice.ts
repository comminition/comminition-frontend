import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICreateUser } from 'types/comminition';

interface InitialSignup {
  email: string | undefined;
  nickname: string | undefined;
  id: string | undefined;
}

const initialState: InitialSignup = { email: undefined, nickname: undefined, id: undefined };

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    enteredPersonalInfo: (state: InitialSignup, action: PayloadAction<ICreateUser>) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.nickname = action.payload.nickname;
    },
  },
});

export const { enteredPersonalInfo } = signupSlice.actions;

export default signupSlice.reducer;
