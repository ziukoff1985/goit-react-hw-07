import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { useEffect } from 'react';
import { fetchDataThunk } from './redux/contactsOps';
import { selectIsError, selectIsLoading } from './redux/selectors';
import Loader from './components/Loader/Loader';
import { Toaster } from 'react-hot-toast';
import Error from './components/Error/Error';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);

  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isError && <Error />}
      {isLoading && <Loader />}
      {!isLoading && <ContactList />}
    </>
  );
}

export default App;
