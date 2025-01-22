import { FaUser, FaPhoneAlt } from 'react-icons/fa'; // Іконки користувача та телефону
import styles from './Contact.module.css'; // Стилі CSS
import { useDispatch } from 'react-redux'; // Хук для доступу до dispatch з Redux
import { deleteContact } from '../../redux/contactsSlice'; // action 'deleteContact' для видалення контакту з Redux-стану

// Компонент для відображення картки контакту
// Пропси з 'ContactList': {...contact} ✔✔✔ властивості контакта
const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch(); // Функція для відправки 'action' у Redux

  // Функція-обробник для видалення контакту
  const handleDelete = () => {
    // Видаляємо контакт через Redux-dispatch, передаючи id контакта
    dispatch(deleteContact(id)); // Викликаємо action deleteContact з id контакту
  };

  // Рендер компонента
  return (
    // Контейнер для одного контакту
    <li className={styles.contactCard}>
      {/* Обгортка для даних контакту */}
      <div className={styles.contactCardWrap}>
        {/* ім'я користувача з іконкою */}
        <p className={styles.contactCardItem}>
          {/* Іконка користувача */}
          <FaUser className={styles.iconUser} />
          {name} {/* Ім'я контакту */}
        </p>
        {/* номер телефону з іконкою */}
        <p className={styles.contactCardItem}>
          {/* Іконка телефону */}
          <FaPhoneAlt className={styles.iconPhone} />
          {number} {/* Номер телефону */}
        </p>
      </div>
      {/* Кнопка для видалення контакту */}
      <button
        className={styles.deleteButton}
        type="button"
        // Викликаємо handleDelete при натисканні
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;

// ======================================================== //

// *** Логіка ***

// *** Загальна логіка: ***
// - Компонент відповідає за візуальне представлення контакту та надає функціонал для його видалення через Redux.

// *** 'Іконки': ***
// - Використовуються іконки з бібліотеки react-icons (FaUser для імені та FaPhoneAlt для телефону) для покращення візуального вигляду.

// *** 'Пропси': ***
// Компонент отримує три пропси:
// - 'name' — ім'я контакту.
// - 'number' — номер телефону.
// - 'id' — унікальний ідентифікатор контакту.

// *** 'Redux': ***
// - Використовується хук useDispatch для отримання доступу до функції dispatch.
// - Викликається дія deleteContact з переданим id, щоб видалити контакт із глобального стану.

// *** Функція 'handleDelete': ***
// - Відправляє дію deleteContact до Redux, використовуючи id контакту, що видаляється.

// *** 'Рендеринг': ***
// - Відображається елемент списку <li> із класом contactCard.
// - Дані контакту (ім'я та номер) розташовані в окремих параграфах із відповідними іконками.

// *** 'Кнопка видалення': ***
// - Стилізована кнопка з класом deleteButton, що викликає функцію handleDelete при натисканні.
