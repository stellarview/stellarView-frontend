import styles from './Header.module.scss';
import { useAuth } from '../../state/UserContext';
import { FormButton } from '../Forms/FormControls';

export default function Header() {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };  

  return <header className={styles.Header}>
    <FormButton onClick={handleSignOut}>Sign Out</FormButton>
  </header>;
}
