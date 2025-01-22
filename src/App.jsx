import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { useEffect } from 'react';
import { fetchDataThunk } from './redux/contactsOps';
import { selectIsError, selectIsLoading } from './redux/selectors';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);

  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isError && <h2>Something went wrong!</h2>}
      {isLoading && <h2>Loading...</h2>}
      <ContactList />
    </>
  );
}

export default App;
