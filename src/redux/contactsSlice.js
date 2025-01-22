import { createSlice } from '@reduxjs/toolkit'; // Імпорт функції createSlice з бібліотеки @reduxjs/toolkit для створення slice

// Створюємо slice для зміни стану контактів
const contactsSlice = createSlice({
  name: 'contacts', // Назва slice, яка визначає його частину стану
  initialState: {
    items: [], // Початковий стан контактів - порожній масив
  },
  reducers: {
    // Редюсер для додавання нового контакту
    // Використовується в компоненті 'ContactForm'
    addContact: (state, action) => {
      state.items.push(action.payload); // Додаємо новий контакт до масиву items
    },
    // Редюсер для видалення контакту за id
    // Використовується в компоненті 'Contact'
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload // Фільтруємо масив контактів, щоб видалити контакт з переданим id
      );
    },
  },
});

// Експортуємо action 'addContact' і 'deleteContact' для використання в компонентах
export const { addContact, deleteContact } = contactsSlice.actions;

// Експортуємо редюсер для додавання його в Redux store
export const contactsReducer = contactsSlice.reducer;

// ======================================================== //

// *** Логіка ***

// »»» "createSlice":
// Створює slice для контактів, що включає в себе редюсери, початковий стан та автоматично згенеровані дії.

// »»» "name":
// Назва slice у createSlice, яка визначає частину стану, що буде керуватися цим slice. У нашому випадку це "contacts".

// »»» "initialState":
// Початковий стан slice. Визначено, що items (список контактів) — це порожній масив.

// »»» reducers:
// Редюсери для зміни стану:
// - addContact: Додає новий контакт до масиву items. Значення контакту передається через action.payload.
// - deleteContact: Видаляє контакт з масиву items за допомогою фільтрації по id. Якщо id контакту не співпадає з action.payload, то контакт залишається в масиві.

// »»» "addContact" та "deleteContact":
// Це згенеровані автоматично дії, які дозволяють додавати або видаляти контакти з Redux-стану.

// »»» "contactsReducer":
// Експортуємо редюсер для використання в основному store Redux. Це дозволяє управлінню контактами відбуватись через цей slice.
