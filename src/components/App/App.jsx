import Navbar from "components/Navbar/Navbar";
// import css from './App.module.css';
import UserRoutes from "components/UserRoutes";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "redux/auth/auth-operations";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <UserRoutes />
    </>
  );
};

export default App;
