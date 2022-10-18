import { getUserById } from '../../services/users';
import { useEffect, useState } from 'react';

export default function UserInfoList ) {
  const [userInfo, setUserInfo] = useState([]);

  async function fetchUserInfo() {
    const userData = await getUserById();
    setUserInfo(userData);
  }
  
  useEffect(() => {
    fetchUserInfo();
  }, []);

  return(
    <div>
      {
        userInfo
      }
    </div>
  );


}

{/* <div className={styles.UserInfo}>
        <h1>User Info</h1>
        <h3>username</h3>
        <h3>date joined</h3>
        <h3>points?</h3>
        
      </div>
      <div className={styles.Badges}> 
        <h1>Badges</h1>
        <ul><li>html level 1(badge)</li>
          <li>html level 2(badge)</li>
          <li>css level 1(badge)</li>
        </ul>
      </div> */}