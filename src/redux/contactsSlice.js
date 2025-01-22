import { createSlice } from '@reduxjs/toolkit';
import { deleteContactThunk, fetchDataThunk } from './contactsOps';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    isError: null,
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
    fetchDataSuccess: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: builder => {
    builder
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
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      });
  },
});

export const { addContact, setIsError, setIsLoading, fetchDataSuccess } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
