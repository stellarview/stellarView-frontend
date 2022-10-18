import styles from './ProfilePage.module.scss';
import UserInfoList from './UserInfoList';



export default function ProfilePage({ userInfo }) {

  return (
    <div className={styles.ProfilePage}>
      <UserInfoList userInfo={userInfo}/>
    </div>
  );
}
