import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import { signup } from "redux/auth/auth-operations";
import { isUserLogin } from "redux/auth/auth-selectors";

import RegisterForm from "components/RegisterForm/RegisterForm";

const RegisterPage = () => {
    const isLogin = useSelector(isUserLogin);
    const dispatch = useDispatch();

    const handleSignup = data => {
        dispatch(signup(data))
    };

    if (isLogin) {
    return<Navigate to='/contacts' />
}

    return (<>
        <h1>Register page</h1>
        <RegisterForm onSubmit={handleSignup} />
    </>)
};

export default RegisterPage;