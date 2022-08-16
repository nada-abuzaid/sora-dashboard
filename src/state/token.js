import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: { value: { token: '' } },
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;

export { tokenSlice, setToken };
