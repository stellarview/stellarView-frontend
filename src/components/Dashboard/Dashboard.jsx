import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//do we need an outlet?
import styles from './Dashboard.module.scss';
import { useUser } from '../../state/UserContext.jsx';
import { DashboardButton } from '../Buttons/CustomButton';

export default function Dashboard() {
  const user = useUser();

  if (!user) return <Navigate to="welcome" />;

  const navigate = useNavigate();

  const handleClick = async (e) => {
    navigate(`quiz/${e.target.value}`);
  };

  return <div className={styles.Dashboard}>
    <DashboardButton
      value="html"
      onClick={handleClick}>
    HTML
    </DashboardButton>


    {/* {display.map((btn) => (
      <DashboardButton
        key={btn.id}
        value={btn.category}
        onClick={handleClick}>
        {btn.category}
      </DashboardButton>
    ))} */}



  </div>;

}
