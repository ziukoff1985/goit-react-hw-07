import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchDataThunk,
} from './contactsOps';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    isError: null,
  },

  extraReducers: builder => {
    builder
      // Fetch contacts
      .addCase(fetchDataThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchDataThunk.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchDataThunk.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      // Delete contact
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.isLoading = false;
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteContactThunk.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      // Add contact
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      })
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
        state.isError = false;
      });
  },
});

export const { addContact, setIsError, setIsLoading, fetchDataSuccess } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
