import Button from 'components/shared/components/Button/Button';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  return (
    <>
      <div>
        <p>
          {name}: {number}
        </p>
      </div>
      <Button onClick={() => onDeleteContact(id)}>Delete contact</Button>
    </>
  );
};

export default Contact;
