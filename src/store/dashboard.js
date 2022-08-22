import { createSlice } from '@reduxjs/toolkit';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: { value: { dashboard: 'lite' } },
  reducers: {
    setDashboard: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { setDashboard } = dashboardSlice.actions;

export default dashboardSlice.reducer;

export { dashboardSlice, setDashboard };
