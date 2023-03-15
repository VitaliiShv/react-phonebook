// import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/auth-selectors';
// import items from './items';
import css from './Navbar.module.css';
import AuthMenu from './AuthMenu/AuthMenu';
import UserMenu from './UserMenu/UserMenu';

const Navbar = () => {
  // const elements = items.map(({ id, text, link }) => (
  //   <li key={id}>
  //     <NavLink className={css.link} to={link}>
  //       {text}
  //     </NavLink>
  //   </li>
  // ));

  const isLogin = useSelector(isUserLogin);
  

  return <div className={css.items}>
    <p>navbar</p>
    {!isLogin && <AuthMenu />}
    {isLogin && <UserMenu />}
  </div>
  ;
  // <ul className={css.menu}>{elements}</ul>
};

export default Navbar;
