import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavLink to="">
        home
      </NavLink>
      <NavLink to="profile"> 
        profile
      </NavLink>
      <NavLink to="about">
        info
      </NavLink>
    </nav>
  );
}
