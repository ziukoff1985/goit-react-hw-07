import { configureStore } from '@reduxjs/toolkit'; // Функція для створення Redux store з Redux Toolkit
import { contactsReducer } from './contactsSlice'; // Reducer для керування контактами (імпорт зі слайсу)
import { filtersReducer } from './filtersSlice'; // Reducer для фільтрів пошуку контактів (імпорт зі слайсу)
// Імпортуємо компоненти бібліотеки 'Redux-Persist' (збереження в Local Storage), з бібліотеки!!!
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Імпорт механізму для збереження стану у локальному сховищі браузера, з бібліотеки!!!

// Конфігурація для redux-persist, з бібліотеки!!!
const persistConfig = {
  key: 'root', // Ключ для збереження стану в localStorage
  version: 1, // Версія збереженого стану (при зміні версії зберігаються нові дані)
  storage, // Вказуємо, на використання 'Local Storagе' для збереження даних
};

// Створюємо 'persistReducer', який зберігає лише стани, що стосуються контактів, з бібліотеки!!!
// Додаємо наш Reducer (contactsReducer), на його місце - persistedReducer (в const store)
const persistedReducer = persistReducer(persistConfig, contactsReducer);

// Конфігурація Redux store
export const store = configureStore({
  reducer: {
    contacts: persistedReducer, // Стан контактів буде зберігатися і відновлюватися через 'persistReducer'
    filters: filtersReducer, // Reducer для фільтрів пошуку (зі слайсу 'filtersSlice.js')
  },

  // Налаштовуємо middleware для Redux store, щоб ігнорувати певні дії redux-persist, з бібліотеки!!!
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ігноруємо дії, пов'язані з redux-persist, щоб вони не викликали помилок
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Створюємо persistor для відновлення стану з redux-persist, з бібліотеки!!!
export const persistor = persistStore(store);

// ======================================================== //

// *** Логіка ***

// Імпортуємо залежності:

// Імпортуємо необхідні функції та компоненти для конфігурації Redux Store та використання redux-persist для збереження стану.
// Створюємо конфігурацію для redux-persist:

// Визначаємо об'єкт конфігурації persistConfig, де вказуємо:
// Ключ для збереження в localStorage (key: "root").
// Версію сховища (version: 1).
// Використання локального сховища для зберігання даних (storage).
// Створюємо persistedReducer:

// За допомогою persistReducer комбінуємо конфігурацію з редюсером контактів (contactsReducer), щоб мати можливість зберігати і відновлювати цей стан.
// Конфігурація Redux store:

// Створюємо Redux store за допомогою configureStore, де:
// Визначаємо редюсери для стану контактів (contacts: persistedReducer) та фільтрів (filters: filtersReducer).
// Налаштовуємо middleware для ігнорування дій, які не можна серіалізувати (пов'язаних із redux-persist).
// Створюємо persistor:

// Використовуємо persistStore, щоб створити об'єкт persistor, який буде відповідати за збереження і відновлення стану Redux.
// Експортуємо store і persistor:

// Експортуємо store і persistor для використання в інших частинах додатка, де вони будуть необхідні для роботи з Redux і redux-persist.
