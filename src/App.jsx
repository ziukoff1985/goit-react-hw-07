import './App.css';
import ContactForm from './components/ContactForm/ContactForm'; // Компонент форми додавання контакту
import ContactList from './components/ContactList/ContactList'; // Компонент списку контактів
import SearchBox from './components/SearchBox/SearchBox'; // Компонент для пошуку контактів

// Головний компонент додатка
function App() {
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm /> {/* Компонент форми */}
      <SearchBox /> {/* Компонент пошуку */}
      <ContactList /> {/* Компонент списку контактів */}
    </>
  );
}

export default App;
