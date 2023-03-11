import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import Contact from 'components/Contact/Contact';

const ContactList = ({ contacts }) => {
  const elements = contacts.map(({ id, name, number }) => (
    <li className={css.contactListItem} key={id}>
      <Contact id={id} name={name} number={number}></Contact>
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
