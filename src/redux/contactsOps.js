import axios from 'axios';
// import { fetchDataSuccess, setIsError, setIsLoading } from './contactsSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6790da7baf8442fd7378062a.mockapi.io';

// export const fetchData = () => async dispatch => {
//   try {
//     dispatch(setIsError(false));
//     dispatch(setIsLoading(true));
//     const response = await axios.get('/contacts');
//     dispatch(fetchDataSuccess(response.data));
//     dispatch(setIsLoading(false));
//   } catch (error) {
//     console.log(error);
//     dispatch(setIsError(true));
//   }
// };

export const fetchDataThunk = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
