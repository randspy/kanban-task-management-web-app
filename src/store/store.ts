import { configureStore } from '@reduxjs/toolkit';
import { boardsReducer } from '@/store/features/board';

export const store = configureStore({
  reducer: {
    boards: boardsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
