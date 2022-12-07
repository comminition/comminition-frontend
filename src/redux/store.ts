import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './signupSlice';
import loginReduer from './authSlice';
import profileReducer from './profileSlice';
import { listenerMiddleware } from './listenerMiddlewares';

const store = configureStore({
  reducer: { signup: signupReducer, login: loginReduer, profile: profileReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
