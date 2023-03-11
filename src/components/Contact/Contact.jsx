import Button from 'components/shared/Button/Button';

const Contact = ({ id, name, number, onDeleteContact }) => {
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
