import { Outlet, Navigate, Link } from 'react-router-dom';
import styles from './Welcome.module.scss';
import { useUser } from '../../state/UserContext';

export default function Welcome() {
  const user = useUser();
  if (user) return <Navigate to="/" />;
  return (
    <main className={styles.Welcome}>
      <h1>Welcome Page</h1>
      <Link to="signup">Sign up</Link>
      <Outlet />
    </main>
  );
}
