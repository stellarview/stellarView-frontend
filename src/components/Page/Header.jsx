import styles from './Header.module.scss';
import { useAuth } from '../../state/UserContext';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../Buttons/CustomButton';

export default function Header() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('welcome', { replace: true });
  };  

  return <header className={styles.Header}>
    <CustomButton onClick={handleSignOut}>Sign Out</CustomButton>
  </header>;
}
