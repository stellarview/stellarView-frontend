import { Navigate } from 'react-router-dom';
//do we need an outlet?
import styles from './Dashboard.module.scss';
import { useUser } from '../../state/UserContext.jsx';

export default function Dashboard() {
  const user = useUser();

  if (!user) return <Navigate to="/welcome" />;

  return <div className={styles.Dashboard}>Dashboard</div>;
}
