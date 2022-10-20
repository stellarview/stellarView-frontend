import { Outlet, Navigate } from 'react-router-dom';
import styles from './WelcomePage.module.scss';
import { useUser } from '../../state/UserContext';

export default function WelcomePage() {
  const user = useUser();
  if (user) return <Navigate to="/" />;
  return (
    <main className={styles.WelcomePage}>
      <h1>Stellar <br></br>View</h1>
      <Outlet />
    </main>
  );
}
