import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Ilogin } from 'types/comminition';
import Comminition from '../apis/comminition';

interface Auth {
  token: string | undefined;
  isAuthenticated: boolean;
  status: 'success' | 'fail' | 'loading' | null;
}

const initialState: Auth = { token: undefined, isAuthenticated: false, status: null };

export const login = createAsyncThunk('authSlice/login', async (loginData: Ilogin) => {
  const response = await Comminition.login(loginData.email, loginData.password);
  return response.data.token;
});

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logout: (state: Auth) => {
      state.isAuthenticated = false;
      state.token = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.status = 'success';
      state.isAuthenticated = true;
      state.token = payload;
    });
    builder.addCase(login.rejected, (state) => {
      state.status = 'fail';
      state.isAuthenticated = false;
      state.token = undefined;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
