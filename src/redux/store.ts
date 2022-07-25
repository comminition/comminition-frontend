import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './signupSlice';
import loginReduer from './authSlice';

const store = configureStore({ reducer: { signup: signupReducer, login: loginReduer } });

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
