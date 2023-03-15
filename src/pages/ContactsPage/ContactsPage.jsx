import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
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

import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const contacts = useSelector(getAllContacts);
  const filteredContacts = useSelector(getFilteredContacts);

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

  return (
    <div className={css.container}>
      <ContactForm onSubmit={onAddContact} />
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {filteredContacts.length > 0 && (
        <ContactList contacts={filteredContacts} />
      )}
    </div>
  );
};

export default ContactsPage;
