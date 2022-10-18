import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavLink to="home">
        <span className="material-symbols-outlined">home</span>
      </NavLink>
      <NavLink to="profile"> 
        <span className="material-symbols-outlined">account_circle</span>
      </NavLink>
      <NavLink to="about">
        <span className="material-symbols-outlined">info</span>
      </NavLink>
    </nav>
  );
}
