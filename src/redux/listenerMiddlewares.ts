import { createListenerMiddleware, TypedStartListening, addListener, TypedAddListener } from '@reduxjs/toolkit';
import type { RootState, AppDispatch } from './store';
import { loadUserProfile } from './profileSlice';

export const listenerMiddleware = createListenerMiddleware();

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

export const startAppListening = listenerMiddleware.startListening as AppStartListening;

export const addAppListener = addListener as TypedAddListener<RootState, AppDispatch>;

startAppListening({
  predicate: (_, currentState, previousState) => {
    return previousState.login.userId !== currentState.login.userId;
  },
  effect: async (action, listnerApi) => {
    const { userId } = listnerApi.getState().login;
    if (!userId) return;
    listnerApi.dispatch(loadUserProfile(userId));
  },
});
