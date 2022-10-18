import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
//do we need an outlet?
import styles from './Dashboard.module.scss';
import { useUser } from '../../state/UserContext.jsx';
import { DashboardButton } from '../Buttons/CustomButton';
import { getCategories, getQuiz } from '../../services/quiz';
import { useQuizContext } from '../../state/QuizContext';

export default function Dashboard() {
  const { category, setCategory, setQuizQuestions } = useQuizContext();
  const user = useUser();
  // const [display, setDisplay] = useState('');

  if (!user) return <Navigate to="welcome" />;

  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const buttons = await getCategories();
  //     setDisplay(buttons);
  //   };
  //   fetchData();
  // }, []);

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
