import styles from './ProfilePage.module.scss';
import { useEffect, useState } from 'react';
import { getUserById } from '../../services/users';
import UserInfoList from './UserInfoList';

export default function ProfilePage() {
  const [userInfo, setUserInfo] = useState([]);

  async function fetchUserInfo() {
    const userData = await getUserById();
    setUserInfo(userData);
  }

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <div className={styles.ProfilePage}>
      <UserInfoList userInfo={userInfo} />
    </div>
  );
}
