import Button from 'shared/components/Button/Button';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  return (
    <div>
      <p>
        {name}: {number}
      </p>
      <Button onClick={() => onDeleteContact(id)}>Delete contact</Button>
    </div>
  );
};

export default Contact;
