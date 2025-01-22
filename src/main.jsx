import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Стилі CSS
import App from './App.jsx';
import { Provider } from 'react-redux'; // Компонент Provider для підключення Redux до додатку
import { persistor, store } from './redux/store.js'; // Імпорт store і persistor для роботи з Redux та збереження стану
import { PersistGate } from 'redux-persist/integration/react'; // PersistGate - бібліотека, забезпечує відновлення стану Redux після перезавантаження сторінки (збереження в Local Storage)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Provider pабезпечує доступ до Redux store для всіх компонентів */}
    <Provider store={store}>
      {/* PersistGate забезпечує відновлення стану з redux-persist перед рендером додатка */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
// Provider:
// - компонент з бібліотеки react-redux, який надає доступ до Redux store для всіх дочірніх компонентів. Це дозволяє компонентам підключатися до Redux store, щоб отримати і змінювати стан. Обов'язково огрнути Арр!!!

// PersistGate:
// - компонент з бібліотеки redux-persist, який відповідає за збереження (в Local Storage) і відновлення стану Redux. PersistGate чекає на відновлення стану перед рендерингом додатка, щоб забезпечити збереження даних після перезавантаження сторінки.
