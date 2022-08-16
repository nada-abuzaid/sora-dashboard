/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const companySlice = createSlice({
  name: 'companies',
  initialState: { value: { companies: [] } },
  reducers: {
    setCompanies: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { setCompanies } = companySlice.actions;

export default companySlice.reducer;

export { companySlice, setCompanies };
