import { configureStore } from '@reduxjs/toolkit';

import loginReduer from './authSlice';
import { listenerMiddleware } from './listenerMiddlewares';
import profileReducer from './profileSlice';
import signupReducer from './signupSlice';

const store = configureStore({
  reducer: { signup: signupReducer, login: loginReduer, profile: profileReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
