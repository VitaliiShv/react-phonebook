import { useSelector } from "react-redux";
import { isUserLogin } from "redux/auth/auth-selectors";
import { Link } from "react-router-dom";
import AuthMenu from "./AuthMenu/AuthMenu";
import UserMenu from "./UserMenu/UserMenu";
import { Container, Box, Stack, Typography } from "@mui/material";

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <Box sx={{ backgroundColor: "#edebe6" }}>
      <Container sx={{ backgroundColor: "#ffeb5b", maxWidth: "600px" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box pb={3} pt={3}>
            <Link to="/home">
              <Typography
                component="h2"
                sx={{
                  fontFamily: "Raleway, cursive",
                  textDecoration: "inherit",
                  color: "#000000",
                  fontSize: "24px",
                }}
              >
                All your contacts are here
              </Typography>
            </Link>
          </Box>
          <Box pb={3} pt={3}>
            {!isLogin && <AuthMenu />}
            {isLogin && <UserMenu />}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
