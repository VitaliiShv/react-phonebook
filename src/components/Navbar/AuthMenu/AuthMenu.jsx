import { NavLink } from "react-router-dom";

import { Stack, Divider, styled } from "@mui/material";

export const StyledLink = styled(NavLink)({
  display: "inline-flex",
  backgroundColor: "#edb51a",
  color: "#000000",
  textTransform: "uppercase",
  padding: "5px 15px",
  border: "1px solid #000000",
  borderRadius: "4px",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  textDecoration: "none",
  transition:
    "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",
  "&:hover": {
    backgroundColor: "transparent",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",
  },
});

const UserMenu = () => {
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={1}
    >
      <StyledLink to="/register">signup</StyledLink>
      <StyledLink
        sx={{
          backgroundColor: "#1976d2",
          "&:hover": { backgroundColor: "#1565c0" },
        }}
        to="/login"
      >
        Login
      </StyledLink>
    </Stack>
  );
};

export default UserMenu;
