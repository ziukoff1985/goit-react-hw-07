import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Імпорт `Provider` для підключення Redux до застосунку
import { Provider } from 'react-redux';

// Налаштування Redux-стору
import { store } from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Обгортаємо застосунок у `Provider` для надання доступу до Redux-стору */}
    {/* Provider - компонент, який підключає Redux-стор до застосунку -> аналог контексту (useContext) */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
