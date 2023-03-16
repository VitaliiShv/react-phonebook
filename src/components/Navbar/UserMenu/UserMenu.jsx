import { useSelector, useDispatch } from "react-redux";
import { getUser } from "redux/auth/auth-selectors";
import { logout } from "redux/auth/auth-operations";


const UserMenu = () => {
    const { name } = useSelector(getUser);
    const dispatch = useDispatch();

    const onLogOut = () => {
        dispatch(logout())
    }
    
    return (
    <>
        <p>{name}</p>
        <button onClick={onLogOut}>Logout</button>
    </>
    )
}

export default UserMenu;