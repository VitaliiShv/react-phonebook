import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));

const UserRoutes = () => {
  return (
    <Suspense
      fallback={
        <Backdrop sx={{ color: "#fff", zIndex: 999 }} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
