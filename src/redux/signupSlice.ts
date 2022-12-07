import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Comminition from 'apis/comminition';
import { toast } from 'react-hot-toast';

interface InitialSignup {
  email: string | undefined;
  nickname: string | undefined;
  id: string | undefined;
  status: 'loading' | 'success' | 'fail' | undefined;
}

const initialState: InitialSignup = { email: undefined, nickname: undefined, id: undefined, status: undefined };

export const sendPersonalInfo = createAsyncThunk(
  'signupSlice/sendPersonalInfo',
  async (personalData: { username: string; email: string; password: string }) => {
    let response;
    try {
      response = await Comminition.createUser(personalData.username, personalData.email, personalData.password);
    } catch (error) {
      if (error instanceof Error) {
        toast(error.message);
      }
    }
    return response;
  },
);

export const signupSlice = createSlice({
  name: 'signupSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendPersonalInfo.pending, (state) => {
      state.status = 'loading';
      state.email = undefined;
      state.nickname = undefined;
      state.id = undefined;
    });
    builder.addCase(sendPersonalInfo.fulfilled, (state, { payload }) => {
      state.status = 'loading';
      state.email = payload?.data.email;
      state.nickname = payload?.data.nickname;
      state.id = payload?.data.id;
    });
    builder.addCase(sendPersonalInfo.rejected, (state) => {
      state.status = 'fail';
      state.email = undefined;
      state.nickname = undefined;
      state.id = undefined;
    });
  },
});

// export const {} = signupSlice.actions;

export default signupSlice.reducer;
