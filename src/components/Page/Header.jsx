import styles from './Header.module.scss';
import { useAuth } from '../../state/UserContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserById } from '../../services/users';
import CustomButton from '../Buttons/CustomButton';
import shootingStar from '../../assets/icon_shooting_star.png';

export default function Header() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  // useContext?
  const [userInfo, setUserInfo] = useState([]);

  async function fetchUserInfo() {
    const results = await getUserById();
    setUserInfo(results.data);
  }

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate('welcome', { replace: true });
  };

  return (
    <header className={styles.Header}>
      <div className={styles.LogoAndSignOut}>
        <h2>StellarView</h2>
        <CustomButton onClick={handleSignOut}>Sign Out</CustomButton>
      </div>
      <div className={styles.UserStats}>
        <div>
          <span>{userInfo.username}</span>
          <div className={styles.Points}>
            <span>
              {userInfo.total_points} <img src={shootingStar} />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
