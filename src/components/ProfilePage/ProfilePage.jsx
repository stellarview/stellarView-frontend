import styles from './ProfilePage.module.scss';
import { useEffect, useState } from 'react';
import { getUserById } from '../../services/users';
import CompletedCategoriesList from './UserInfoList';

export default function ProfilePage() {
  const [userInfo, setUserInfo] = useState({ completed_categories: [] });

  async function fetchUserInfo() {
    const results = await getUserById();
    console.log('results', results);
    setUserInfo(results.data);
  }

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const getBadges = (badges) => {
    if (badges.length > 0) {
      return <CompletedCategoriesList category={badges} />;
    } 
  };

  return (
    <div className={styles.ProfilePage}>
      <h1>{`Welcome, ${userInfo.username}!`}</h1>
      <p>points: {userInfo.total_points}</p>
      {getBadges(userInfo.completed_categories)}
    </div>
  );
}
