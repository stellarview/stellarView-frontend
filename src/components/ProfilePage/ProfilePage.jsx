import styles from './ProfilePage.module.scss';
import { useEffect, useState } from 'react';
import { getUserById } from '../../services/users';
import CompletedCategoriesList from './UserInfoList';
import shootingStar from '../../assets/icon_shooting_star.png';

export default function ProfilePage() {
  const [userInfo, setUserInfo] = useState({ completed_categories: [] });

  async function fetchUserInfo() {
    const results = await getUserById();
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
      <h1>{`Greetings, ${userInfo.username}!`}</h1>
      <p>{userInfo.total_points} <img src={shootingStar}/></p>
      {getBadges(userInfo.completed_categories)}
    </div>
  );
}
