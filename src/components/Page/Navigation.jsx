import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import iconHome from '../../assets/icon_home.png';
import iconProfile from '../../assets/icon_profile.png';
import iconAbout from '../../assets/icon_about.png';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavLink to="" alt="home" title="home">
        <img src={iconHome}/>
      </NavLink>
      <NavLink to="profile" alt="profile" title="profile"> 
        <img src={iconProfile}/>
      </NavLink>
      <NavLink to="about" alt="about" title="about">
        <img src={iconAbout}/>
      </NavLink>
    </nav>
  );
}
