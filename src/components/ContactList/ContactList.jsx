import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import Contact from 'components/Contact/Contact';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  const elements = contacts.map(({ id, name, number }) => (
    <li className={css.contactListItem} key={id}>
      <Contact
        id={id}
        name={name}
        number={number}
        onDeleteContact={onDeleteContact}
      ></Contact>
    </li>
  ));

  return <ul className={css.contactList}>{elements}</ul>;
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
