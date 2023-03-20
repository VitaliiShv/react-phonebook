import { Backdrop, CircularProgress } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { getAuth } from "redux/auth/auth-selectors";

const PrivateRoute = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return (
      <Backdrop sx={{ color: "#fff", zIndex: 999 }} open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
