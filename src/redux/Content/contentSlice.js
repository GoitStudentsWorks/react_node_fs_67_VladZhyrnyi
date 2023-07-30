import { createSlice } from '@reduxjs/toolkit';
import { AddPet, AddPetOther } from './operations';

const contentInitialState = {
  items: [],
  isLoading: false,
  error: null,
  success: false,
};

const contentSlice = createSlice({
  name: 'content',
  initialState: contentInitialState,
  reducers: {
    resetSuccess: state => {
      state.success = false;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(AddPet.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(AddPet.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.success = true;
        state.items.push(payload);
      })
      .addCase(AddPet.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(AddPetOther.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(AddPetOther.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.success = true;
        state.items.push(payload);
      })
      .addCase(AddPetOther.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});
export const { resetSuccess } = contentSlice.actions;

export const contentReducer = contentSlice.reducer;
