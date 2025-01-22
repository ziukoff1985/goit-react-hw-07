import styles from './SearchBox.module.css'; // Стилі CSS
import { useDispatch, useSelector } from 'react-redux'; // хуки з React-Redux
import { changeFilter } from '../../redux/filtersSlice'; // action 'changeFilter' для зміни фільтру
import { useId } from 'react'; // Хук 'useId'
import { selectNameFilter } from '../../redux/selectors'; // функція-селектор для отримання поточного значення фільтру (з файлу 'selectors.js')

// Компонент пошукового поля
const SearchBox = () => {
  const filter = useSelector(selectNameFilter); // Отримуємо значення фільтру із Redux-стану
  const dispatch = useDispatch(); // Функція для відправки 'action' у Redux

  const searchId = useId(); // Унікальний Id для зв'язування 'input' з 'label'

  // Функція-обробник для зміни значення фільтру (стан властивості 'name')
  // Відправляє екшен changeFilter із текстом, введеним у поле
  const handleChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  // Рендер компонента
  return (
    <>
      {/* Поле вводу для пошуку контактів */}
      <label htmlFor={searchId} className={styles.inputLabel}>
        Find contacts by name
      </label>
      <div className={styles.inputWrap}>
        <input
          className={styles.input}
          id={searchId}
          type="text"
          name="search"
          value={filter} // Поточне значення фільтру
          onChange={handleChangeFilter} // Викликаємо handleChangeFilter при введенні тексту в input
        />
      </div>
    </>
  );
};

export default SearchBox;

// ======================================================== //

// *** Логіка ***

// *** Загальна логіка: ***
// - Компонент SearchBox забезпечує фільтрацію контактів за іменем.
// - Коли користувач вводить текст у поле, значення фільтру оновлюється в Redux-стані через екшен changeFilter.
// - Інпут синхронізований зі станом Redux, тому будь-які зміни відображаються в інших частинах додатка, наприклад, у списку контактів.

// *** 'Імпорти': ***
// - styles: Модульні стилі для компонента.
// - useDispatch: Хук Redux для надсилання екшенів.
// - useSelector: Хук Redux для доступу до стану.
// - changeFilter: Екшен для зміни значення фільтру.
// - useId: Хук React для створення унікальних ідентифікаторів.
// - selectNameFilter: Селектор для отримання значення фільтру.

// *** 'Доступ до Redux-стану': ***
// - useSelector(selectNameFilter): Отримує значення фільтру (рядок для пошуку контактів).
// - useDispatch(): Повертає функцію dispatch, яка використовується для надсилання екшенів у Redux.

// *** 'Логіка': ***
// - useId(): Створює унікальний ідентифікатор для інпуту (id), щоб уникнути конфліктів при використанні міток.
// - dispatch(changeFilter(event.target.value)): Відправляє екшен changeFilter із текстом, введеним у поле.

// *** 'Рендеринг': ***
// <label>: Мітка для поля вводу з текстом "Find contacts by name".
// <input>: Інпут для введення тексту пошуку.
// - value={filter}: Прив'язує значення інпуту до фільтру з Redux.
// - onChange: Викликає функцію handleChangeFilter, яка передає нове значення фільтру.

// *** 'Структура HTML': ***
// - Контейнер складається з мітки (<label>) і обгортки (<div>) для стилізації інпуту (<input>).
