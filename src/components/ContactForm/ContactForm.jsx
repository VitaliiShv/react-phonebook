import PropTypes from "prop-types";
import { Box, TextField } from "@mui/material";
import SubmitButton from "shared/components/SubmitButton/SubmitButton";
import fields from "./fields";
import initialState from "./initialState";
import useForm from "shared/hooks/useForm";

const ContactForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, number } = state;
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        autoComplete="on"
        value={name}
        onChange={handleChange}
        {...fields.name}
      />
      <TextField value={number} onChange={handleChange} {...fields.number} />
      <SubmitButton type="submit">Add contact</SubmitButton>
    </Box>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
