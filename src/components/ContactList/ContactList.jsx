import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts, selectNameFilter } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
