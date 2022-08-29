import { createSlice } from '@reduxjs/toolkit';

const initialValues = {
  openConfirmation: false,
};
const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    value: { initialValues },
  },
  reducers: {
    setConfirmationOpen: (state, action) => {
      console.log(action.payload);
      state.value.openConfirmation = action.payload;
    },
  },
});

const { setConfirmationOpen } = modalSlice.actions;

export default modalSlice.reducer;

export {
  modalSlice,
  setConfirmationOpen,
};
