// import TextField from "shared/components/TextField/TextField";
import useForm from "shared/hooks/useForm";
import initialState from "./initialState";
import fields from "./fields";
import SubmitButton from "shared/components/SubmitButton/SubmitButton";
import { Box, TextField } from "@mui/material";

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="on"
      onSubmit={handleSubmit}
    >
      <TextField value={name} onChange={handleChange} {...fields.name} />
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <SubmitButton type="submit">Register</SubmitButton>
    </Box>
  );
};

export default RegisterForm;
