import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
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
      // Fetch contacts.fulfilled
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      // Add contact.fulfilled
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.isError = false;
      })
      // Delete contact.fulfilled
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.isLoading = false;
        state.isError = false;
      })
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.pending,
          deleteContactThunk.pending,
          addContactThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          deleteContactThunk.rejected,
          addContactThunk.rejected
        ),
        (state, action) => {
          state.isError = action.payload;
          state.isLoading = false;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
