import { Outlet, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from './Welcome.module.scss';
import { useUser } from '../../state/UserContext';
import CustomButton from '../Buttons/CustomButton';
import standingAlien from '../../assets/standing-alien.png';

export default function Welcome() {
  const user = useUser();
  if (user) return <Navigate to="/" />;

  const navigate = useNavigate();

  const signUpRedirect = () => {
    navigate('signup');
  };

  const signInRedirect = () => {
    navigate('signin');
  };

  return (
    <main className={styles.Welcome}>
      <h1>
        Build confidence for your next technical interview...
        <img src={standingAlien} />
      </h1>
      <CustomButton
        onClick={signUpRedirect}
        style={{
          backgroundColor: 'midnightblue',
          color: 'white'
        }}>
        get started
      </CustomButton>
      <CustomButton
        onClick={signInRedirect}
        style={{ color: 'midnightblue' }}>
        I already have an account
      </CustomButton>
      <Outlet />
    </main>
  );
}
