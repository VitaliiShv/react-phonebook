import { NavLink } from 'react-router-dom';
import items from './items';
import css from './Navbar.module.css';
import UserMenu from './UserMenu/UserMenu';

const Navbar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={css.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));
  return <div className={css.items}>
    <p>navbar</p>
    <UserMenu></UserMenu>
  </div>
  ;
  // <ul className={css.menu}>{elements}</ul>
};

export default Navbar;
