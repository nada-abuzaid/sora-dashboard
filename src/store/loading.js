import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: { value: { loading: false } },
  reducers: {
    setLoading: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;

export { loadingSlice, setLoading };
