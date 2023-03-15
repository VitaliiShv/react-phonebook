import PropTypes from 'prop-types';
// import css from './ContactForm.module.css';
import TextField from 'shared/components/TextField/TextField';
import Button from 'shared/components/Button/Button';
import fields from './fields';
import initialState from './initialState';
import useForm from 'shared/hooks/useForm';

const ContactForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, number } = state;
  return (
    <form onSubmit={handleSubmit}>
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField
        value={number}
        handleChange={handleChange}
        {...fields.number}
      />
      <Button type="submit">Add contact</Button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
