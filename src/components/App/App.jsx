import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import {
  getAllContacts,
  getError,
  getFilteredContacts,
  getIsLoading,
} from 'redux/contacts/contacts-selectors';
import { addContact } from 'redux/operations';
import { setFilter } from 'redux/filter/filrter-slice';
import { getFilter } from 'redux/filter/filter-selectors';
import css from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const contacts = useSelector(getAllContacts);
  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isDuplicate = name => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contact list`);
      return true;
    }
  };

  const onAddContact = ({ name, number }) => {
    if (isDuplicate(name)) {
      return;
    }
    const action = addContact({ name, number });
    dispatch(action);
  };

  // const onDeleteContact = contactId => {
  //   const action = deleteContact(contactId);
  //   dispatch(action);
  // };

  const changeFilter = ({ target }) => {
    const action = setFilter(target.value);
    dispatch(action);
  };

  return (
    <div className={css.container}>
      {/* <h1>Phonebook</h1> */}
      <ContactForm onSubmit={onAddContact} />
      {/* <h2>Contacts</h2> */}
      <Filter value={filter} onChange={changeFilter} />
      {isLoading && !error && <b>Request in progress...</b>}
      {filteredContacts.length > 0 && (
        <ContactList
          // onDeleteContact={onDeleteContact}
          contacts={filteredContacts}
        />
      )}
    </div>
  );
};

export default App;
