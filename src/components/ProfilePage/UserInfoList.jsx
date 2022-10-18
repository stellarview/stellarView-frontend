export default function UserInfoList({ userInfo }) {
  return (
    <div>
      <h1>User Info will be displayed below</h1>
      {userInfo.map((user, i) => (
        <ul key={user.userInfo + i}>
          <li>{user.username}</li>
          <li>{user.total_points}</li>
          <li>{user.completed_categories}</li>
        </ul>
      ))}
    </div>
  );
}

{
  /* <div className={styles.UserInfo}>
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
      </div> */
}
