import { useDispatch } from "react-redux";
import { Container, Box } from "@mui/material";

import { login } from "redux/auth/auth-operations";

import LoginForm from "components/LoginForm/LoginForm";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = (data) => {
    dispatch(login(data));
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
        <LoginForm onSubmit={handleLogin} />
      </Container>
    </Box>
  );
};

export default LoginPage;
