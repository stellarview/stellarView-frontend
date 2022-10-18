import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../../state/UserContext.jsx';
import Header from './Header.jsx';
import styles from './Layout.module.scss';

export default function Layout() {
  const user = useUser();
  if (!user) return <Navigate to="welcome" />;
  return (
    <div className={styles.Layout}>
      Layout
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
