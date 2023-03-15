import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import { login } from "redux/auth/auth-operations";
import { isUserLogin } from "redux/auth/auth-selectors";

import LoginForm from "components/LoginForm/LoginForm";

const LoginPage = () => {
    const isLogin = useSelector(isUserLogin);
    const dispatch = useDispatch();

    const handleLogin = data => {
        dispatch(login(data))
    };

    if (isLogin) {
    return<Navigate to='/contacts' />
}

    return (<>
        <h1>Login page</h1>
        <LoginForm onSubmit={handleLogin} />
    </>)
};

export default LoginPage;