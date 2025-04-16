import axios from 'axios'; // 'axios' для HTTP-запитів

// Функція для створення асинхронних операцій
import { createAsyncThunk } from '@reduxjs/toolkit';

// Базова URL-адреса для запитів
axios.defaults.baseURL = 'https://6790da7baf8442fd7378062a.mockapi.io';

// Операція для отримання всіх контактів
// Викликається в компоненті Арр -> useEffect (перший рендер)
export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAllContacts', // Ім'я операції -> відображається в Redux DevTools
  async (_, thunkAPI) => {
    // Функція, яка виконує асинхронний запит
    // '_' - параметр, який не використовується
    try {
      // Виконання GET-запиту
      const response = await axios.get('/contacts');
      // Повернення отриманих даних
      return response.data;
    } catch (error) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Операція для видалення контакту
// Викликається в компоненті Contact (при натисканні на кнопку видалення)
// id - ID контакту, який потрібно видалити -> приходить з компонента Contact (при натисканні на кнопку видалення)
export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact', // Ім'я операції -> відображається в Redux DevTools
  async (id, thunkAPI) => {
    // Функція, яка виконує асинхронний запит
    // id - ID контакту, який потрібно видалити
    try {
      // Виконання DELETE-запиту
      const response = await axios.delete(`/contacts/${id}`);
      // Повернення даних видаленого контакту
      return response.data;
    } catch (error) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Операція для додавання контакту
// Викликається в компоненті ContactForm (при натисканні на кнопку "Add contact")
// body - об'єкт з даними нового контакту (ім'я, номер телефону), які приходять з форми ContactForm.jsx
export const addContactThunk = createAsyncThunk(
  'contacts/addNewContact', // Ім'я операції -> відображається в Redux DevTools
  async (body, thunkAPI) => {
    // Функція, яка виконує асинхронний запит
    // body - дані нового контакту
    try {
      // Виконання POST-запиту
      const response = await axios.post('/contacts', body);
      // Повернення даних нового контакту
      return response.data;
    } catch (error) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
