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
            <NavLink to='/home' className={(navData)=> navData.isActive ? classes.active : ''}>
              CREATIVE
            </NavLink>
          </li>
          <li>
            <NavLink to='/editorial' className={(navData)=> navData.isActive ? classes.active : ''}>
              EDITORIAL
            </NavLink>
          </li>
          <li>
            <NavLink to='/collections' className={(navData)=> navData.isActive ? classes.active : ''}>
              COLLECTIONS
            </NavLink>
          </li>
         
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
