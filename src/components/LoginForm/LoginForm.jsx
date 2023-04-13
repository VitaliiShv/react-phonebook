import { useState, useEffect } from "react";
import useInput from "shared/hooks/useInput";
import validations from "./validations";
import fields from "./fields";
import SubmitButton from "shared/components/SubmitButton/SubmitButton";
import { Box, TextField } from "@mui/material";

const LoginForm = ({ onSubmit }) => {
  const email = useInput("", validations.email);
  const password = useInput("", validations.password);

  const [state, setState] = useState({ email: "", password: "" });

  useEffect(() => {
    setState((prevState) => {
      return {
        ...prevState,

        email: email.value,
        password: password.value,
      };
    });
  }, [email.value, password.value]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ ...state });
    setState({ email: "", password: "" });
  };

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
      <TextField
        error={
          (email.isDirty && email.isEmpty) ||
          (email.isDirty && email.emailError)
        }
        value={email.value}
        onChange={email.onChange}
        onBlur={email.onBlur}
        helperText={
          (email.isDirty &&
            email.isEmpty &&
            "Email address field shouldn't be empty") ||
          (email.isDirty &&
            email.emailError &&
            "Email address should be at correct format")
        }
        {...fields.email}
      />
      <TextField
        error={
          (password.isDirty && password.isEmpty) ||
          (password.isDirty && password.minLengthError)
        }
        value={password.value}
        onChange={password.onChange}
        onBlur={password.onBlur}
        helperText={
          (password.isDirty &&
            password.isEmpty &&
            "Password field shouldn't be empty") ||
          (password.isDirty &&
            password.minLengthError &&
            "Password should have at least 8 characters")
        }
        {...fields.password}
      />
      <SubmitButton
        disabled={!email.inputValid || !password.inputValid}
        type="submit"
      >
        Login
      </SubmitButton>
    </Box>
  );
};

export default LoginForm;
