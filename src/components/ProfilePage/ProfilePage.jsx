import styles from './ProfilePage.module.scss';
import { useEffect, useState } from 'react';
import { getUserById } from '../../services/users';
import BadgeList from './BadgeList';

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
      return <BadgeList category={badges} />;
    }
  };

  return (
    <div className={styles.ProfilePage}>
      <div className={styles.UserInfo}>
        <p>
          {userInfo.username}
        </p>
        <p>
          {userInfo.email}
        </p>
        <p>
          {userInfo.total_points}
        </p>
      </div>
      <div className={styles.Badges}>
        <h1>Badges</h1>
        {getBadges(userInfo.completed_categories)}
      </div>
    </div>
  );
}
