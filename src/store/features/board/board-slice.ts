import { createSlice } from '@reduxjs/toolkit';
import { Board, boards } from '@/store/features/board/board';

const initialState: Board[] = boards;

export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {},
});

export default boardsSlice.reducer;
