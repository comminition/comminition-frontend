import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
