import { createSlice } from '@reduxjs/toolkit';

const employeesSlice = createSlice({
  name: 'employees',
  initialState: { value: { employees: 0, companyId: 0 } },
  reducers: {
    setEmployees: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { setEmployees } = employeesSlice.actions;

export default employeesSlice.reducer;

export { employeesSlice, setEmployees };
