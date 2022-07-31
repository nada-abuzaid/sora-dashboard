/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'upgrade',
  initialState: { value: { open: false } },
  reducers: {
    setPro: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { setPro } = sidebarSlice.actions;

export default sidebarSlice.reducer;

export { sidebarSlice, setPro };
