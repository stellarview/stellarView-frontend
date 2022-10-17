import { Outlet, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from './Welcome.module.scss';
import { useUser } from '../../state/UserContext';
import CustomButton from '../Buttons/CustomButton';

export default function Welcome() {
  const user = useUser();
  if (user) return <Navigate to="/" />;

  const navigate = useNavigate(); 

  const getStarted = () => { 
    navigate('signup');
  };

  return (
    <main className={styles.Welcome}>
      <h1>Welcome Page</h1>
      <CustomButton onClick={getStarted}>get started</CustomButton>
      <Outlet />
    </main>
  );
}
