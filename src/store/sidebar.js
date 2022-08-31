import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: { value: { isOpen: false } },
  reducers: {
    setSidebarOpen: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { setSidebarOpen } = sidebarSlice.actions;

export default sidebarSlice.reducer;

export { setSidebarOpen, sidebarSlice };
