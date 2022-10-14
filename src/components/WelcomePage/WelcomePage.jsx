import { Outlet } from 'react-router-dom';
import styles from './WelcomePage.module.scss';

export default function WelcomePage() {

  return (
    <main className={styles.WelcomePage}>
      <h1>Welcome Page</h1>
      <Outlet />
    </main>
  );
}
