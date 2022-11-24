import { NavLink } from 'react-router-dom';
import CartButton from '../cart/CartButton';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      {/* <div className={classes.logo}>Great Quotes</div> */}
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/home' activeClassName={classes.active}>
              CREATIVE
            </NavLink>
          </li>
          <li>
            <NavLink to='/editorial' activeClassName={classes.active}>
              EDITORIAL
            </NavLink>
          </li>
          <li>
            <NavLink to='/collections' activeClassName={classes.active}>
              COLLECTIONS
            </NavLink>
          </li>
         
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
