import { useSelector } from "react-redux";
import { getUser } from "redux/auth/auth-selectors";


const UserMenu = () => {
    const {name} = useSelector(getUser);
    return (
        <>
  <p>{name}</p>
  <button>Logout</button>
            
</>
    )
}

export default UserMenu;