import { Formik, Form, Field, ErrorMessage } from 'formik'; // Бібліотеки Formik
import { nanoid } from 'nanoid'; // Бібліотека nanoid (генератор унікальних id для кожного контакту)
import styles from './ContactForm.module.css'; // Стилі CSS
import { useDispatch } from 'react-redux'; // Хук для доступу до dispatch з Redux
import { addContact } from '../../redux/contactsSlice'; // action 'addContact' для додавання контакту до Redux-стану
import { useId } from 'react'; // Хук 'useId' для елементів форми
import FormValidationSchema from '../../validationHelper'; // Валідаційна схема

// Компонент форми для додавання контакту
const ContactForm = () => {
  const dispatch = useDispatch(); // Функція для відправки 'action' у Redux

  const nameFieldId = useId(); // Генеруємо унікальний id для поля "name"
  const numberFieldId = useId(); // Генеруємо унікальний id для поля "number"

  // Функція-обробник для сабміту форми
  const handleSubmit = (values, actions) => {
    // Додаємо новий контакт через Redux-dispatch, додаючи унікальний id ('nanoid')
    dispatch(addContact({ ...values, id: nanoid() })); // Викликаємо action addContact і передаємо отримані дані з форми + id ('nanoid')
    actions.resetForm(); // Скидаємо форму після успішного сабміту
  };

  // Рендер компонента
  return (
    <Formik
      initialValues={{ name: '', number: '' }} // Початкові значення форми
      onSubmit={handleSubmit} // Функція обробки сабміту
      validationSchema={FormValidationSchema} // Валідаційна схема (з файлу validationHelper.js)
    >
      {/* Основна форма */}
      <Form className={styles.form}>
        <div className={styles.labelErrorWrap}>
          <label htmlFor={nameFieldId} className={styles.label}>
            Name
          </label>
          {/* Повідомлення про помилку для поля "name" */}
          <ErrorMessage className={styles.error} name="name" component="span" />
        </div>
        {/* Input "name" */}
        <Field
          className={styles.formInput}
          type="text"
          name="name"
          id={nameFieldId}
        ></Field>
        <div className={styles.labelErrorWrap}>
          <label htmlFor={numberFieldId} className={styles.label}>
            Number
          </label>
          {/* Повідомлення про помилку для поля "number" */}
          <ErrorMessage
            className={styles.error}
            name="number"
            component="span"
          />
        </div>
        {/* Input "number" */}
        <Field
          className={styles.formInput}
          type="text"
          name="number"
          id={numberFieldId}
        ></Field>
        {/* Кнопка для сабміту форми */}
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

// ======================================================== //

// *** Логіка ***

// *** Загальна логіка: ***
// - Компонент відповідає за відображення форми та надає функціонал для додавання нового контакту через Redux.

// »»» 'Formik':
// - Використовуємо бібліотеку Formik для керування формою, валідацією та обробкою подій. Це значно спрощує роботу з формами у React.

// »»» 'Yup':
// - Бібліотека для валідації форм. Вона дозволяє створювати схеми валідації, які будуть автоматично застосовуватись до полів форми.

// »»» 'nanoid':
// - Генератор унікальних ідентифікаторів. Використовуємо для створення унікальних id для кожного контакту.

// »»» 'useId':
// - Хук React для генерації унікальних id для елементів форми, що необхідно для коректного зв'язування елементів з лейблами через атрибут htmlFor.

// »»» 'Dispatch і Redux':
// - Використовуємо хук useDispatch для доступу до диспетчера Redux, щоб додати новий контакт до глобального стану через дію addContact.

// »»» 'Formik onSubmit':
// - Функція handleSubmit викликається при сабміті форми. Вона передає дані форми до Redux, додаючи унікальний id для кожного контакту за допомогою nanoid, та скидає форму після успішного сабміту.

// »»» 'Валідація форми':
// - Поля name та number валідуються за допомогою схеми FormValidationSchema, створеної через Yup. Вона перевіряє правильність введених даних (довжина і формат).
