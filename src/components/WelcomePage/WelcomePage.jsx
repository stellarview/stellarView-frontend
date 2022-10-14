import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../../state/UserContext.jsx';
import styles from './WelcomePage.module.scss';

export default function WelcomePage() {
  const user = useUser();

  if (user) return <Navigate to="/" />;
  return (
    <main className={styles.WelcomePage}>
      <h1>Display List</h1>
      <Outlet />
    </main>
  );
}
