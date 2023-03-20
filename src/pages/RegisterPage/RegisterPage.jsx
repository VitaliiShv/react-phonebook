import { Container, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { signup } from "redux/auth/auth-operations";

import RegisterForm from "components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <Box sx={{ backgroundColor: "#edebe6" }}>
      <Container
        sx={{
          backgroundColor: "#5b9fff",
          maxWidth: "600px",
          height: "100vh",
          paddingTop: "20px",
        }}
      >
        <RegisterForm onSubmit={handleSignup} />
      </Container>
    </Box>
  );
};

export default RegisterPage;
