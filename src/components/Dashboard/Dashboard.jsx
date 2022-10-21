import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//do we need an outlet?
import styles from './Dashboard.module.scss';
import { useUser } from '../../state/UserContext.jsx';
import { DashboardButton } from '../Buttons/CustomButton';
import { getCategoriesAndLevels } from '../../services/quiz';

export default function Dashboard() {
  const user = useUser();
  const [displayCategories, setDisplayCategories] = useState([]);

  if (!user) return <Navigate to="welcome" />;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategoriesAndLevels = async () => {
      const data = await getCategoriesAndLevels();
      console.log('data', data.data);
      setDisplayCategories(data.data);
    };
    fetchCategoriesAndLevels();
  }, []);
  console.log('displayCategories', displayCategories);

  const handleClick = async (e) => {
    console.log('e.target.value', e.target.value);
    navigate(`quiz/${e.target.value}`);
  };

  return <div className={styles.Dashboard}>

    {displayCategories.map((button) => (
      <DashboardButton key={button.id}
        value={`${button.category}/${button.level}`}
        onClick={handleClick}>
          
        {button.category} Level {button.level}
      </DashboardButton>
    ))}

  </div>;

}
