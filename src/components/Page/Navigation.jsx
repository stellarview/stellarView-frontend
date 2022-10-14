import { NavLink } from 'react-router-dom';
import styles from 'Navigation.module.scss';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavLink to="">Home</NavLink>
      <NavLink to="profile">Profile</NavLink>
      <NavLink to="about">About</NavLink>
    </nav>
  );
}
