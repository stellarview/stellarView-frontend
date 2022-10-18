import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import iconHome from '../../assets/icon_home.png';
import iconProfile from '../../assets/icon_profile.png';
import iconAbout from '../../assets/icon_about.png';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavLink to="">
        <img src={iconHome}/>
      </NavLink>
      <NavLink to="profile"> 
        <img src={iconProfile}/>
      </NavLink>
      <NavLink to="about">
        <img src={iconAbout}/>
      </NavLink>
    </nav>
  );
}
