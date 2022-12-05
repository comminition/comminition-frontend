import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ilogin } from 'types/comminition';
import Comminition from '../apis/comminition';
import jwtDecode from 'jwt-decode';

interface Auth {
  userId: string | null;
  accessToken: string | null;
  status: 'success' | 'fail' | 'loading' | null;
}

interface DecodedJWT {
  userId: string;
  iat: number;
}

const initialState: Auth = { userId: null, accessToken: null, status: null };

// export const login = createAsyncThunk('authSlice/login', async (loginData: Ilogin) => {
//   const response = await Comminition.login(loginData.email, loginData.password);
//   const { accessToken } = response.data;
//   localStorage.setItem('accessToken', accessToken);
//   return accessToken;
// });

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    login: (state: Auth, action: PayloadAction<string | null>) => {
      if (!action.payload) {
        state.userId = null;
        state.accessToken = null;
        state.status = 'fail';
      }
      const { userId }: DecodedJWT = jwtDecode(action.payload!);
      state.userId = userId;
      state.accessToken = action.payload;
      state.status = 'success';
    },
    logout: (state: Auth) => {
      state.status = 'success';
      state.accessToken = null;
      state.userId = null;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(login.pending, (state) => {
  //     state.status = 'loading';
  //   });
  //   builder.addCase(login.fulfilled, (state, { payload }) => {
  //     state.status = 'success';
  //     state.isAuthenticated = true;
  //     state.accessToken = payload;
  //   });
  //   builder.addCase(login.rejected, (state) => {
  //     state.status = 'fail';
  //     state.isAuthenticated = false;
  //     state.accessToken = undefined;
  //   });
  // },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
