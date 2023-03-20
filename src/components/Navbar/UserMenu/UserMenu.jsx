import { useSelector, useDispatch } from "react-redux";
import { getUser } from "redux/auth/auth-selectors";
import { logout } from "redux/auth/auth-operations";
import { StyledLink } from "../AuthMenu/AuthMenu";
import { Stack } from "@mui/material";

const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logout());
  };

  return (
    <Stack direction="column">
      <p>Hello, {name}</p>
      <StyledLink sx={{}} onClick={onLogOut}>
        Logout
      </StyledLink>
    </Stack>
  );
};

export default UserMenu;
