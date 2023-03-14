import { NavLink } from 'react-router-dom';
import css from './UserMenu.module.css'

const UserMenu = () => {
    return (
        <div>
  {/* <p>mango@mail.com</p>
  <button>Logout</button> */}
            <NavLink className={css.link} to='/register'>Register</NavLink> |
            <NavLink className={css.link} to='/login'>Login</NavLink>
</div>
    )
}

export default UserMenu;