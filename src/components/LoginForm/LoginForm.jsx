// import TextField from "shared/components/TextField/TextField";
import useForm from "shared/hooks/useForm";
import initialState from "./initialState";
import fields from "./fields";
import Button from "shared/components/SubmitButton/SubmitButton";
import { Box, TextField } from "@mui/material";

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

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
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <Button type="submit">Login</Button>
    </Box>
  );
};

export default LoginForm;
