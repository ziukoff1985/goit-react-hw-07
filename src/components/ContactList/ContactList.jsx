import Contact from '../Contact/Contact'; // Компонент Contact
import styles from './ContactList.module.css'; // Стилі CSS
import { useSelector } from 'react-redux'; // Хук для доступу до стану Redux
import { selectContacts, selectNameFilter } from '../../redux/selectors'; // функції-селектори для отримання контактів і фільтра (з файлу 'selectors.js')

// Компонент для відображення списку контактів
const ContactList = () => {
  const contacts = useSelector(selectContacts); // Отримуємо список контактів із Redux-стану
  const nameFilter = useSelector(selectNameFilter); // Отримуємо значення фільтра (рядок для пошуку)

  // Функція для фільтрування контактів за іменем
  // Фільтрує контакти, залишаючи лише ті, чиє ім'я відповідає введеному тексту фільтру
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  // Рендер компонента
  return (
    // Список контактів
    <ul className={styles.contactList}>
      {filteredContacts.map(contact => (
        // Відображаємо кожен контакт за допомогою компонента Contact
        <Contact key={contact.id} {...contact} /> // Передаємо дані контакту ('name', 'number', 'id') через спред-оператор
      ))}
    </ul>
  );
};

export default ContactList;

// ======================================================== //

// *** Логіка ***

// *** Загальна логіка: ***
// - Компонент отримує список контактів і фільтр із Redux-стану за допомогою селекторів.
// - Фільтрує контакти, залишаючи лише ті, чиє ім'я відповідає введеному тексту фільтру.
// - Рендерить список відфільтрованих контактів через компонент Contact.

// *** 'Імпорти': ***
// - Contact: Компонент для відображення одного контакту.
// - styles: Стилі для списку контактів.
// - useSelector: Хук Redux для доступу до стану через селектори.
// - selectContacts і selectNameFilter: Селектори для отримання списку контактів та фільтру з глобального стану.

// *** 'Доступ до Redux-стану': ***
// - useSelector(selectContacts): Повертає масив контактів (contacts).
// - useSelector(selectNameFilter): Повертає текст фільтру для пошуку за іменем (nameFilter).

// *** 'Фільтрація контактів': ***
// contacts.filter(contact => ...):
// - Приводить ім'я контакту (contact.name) та текст фільтру (nameFilter) до нижнього регістру.
// - Перевіряє, чи включає ім'я текст фільтру.

// *** 'Рендеринг': ***
// filteredContacts.map(contact => ...):
// - Перебирає масив відфільтрованих контактів.
// - Для кожного контакту створює компонент Contact, передаючи йому дані через спред-оператор (...contact).
// - Використовує contact.id як значення key, щоб уникнути помилок у React.

// *** 'Структура HTML': ***
// - <ul>: Контейнер для списку контактів із застосованими стилями.
// - <Contact>: Компонент для відображення кожного контакту в списку.
