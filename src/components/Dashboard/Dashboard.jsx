import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
//do we need an outlet?
import styles from './Dashboard.module.scss';
import { useUser } from '../../state/UserContext.jsx';
import { DashboardButton } from '../Buttons/CustomButton';
import { getQuiz } from '../../services/quiz';
import { useQuizContext } from '../../state/QuizContext';

export default function Dashboard() {
  const { category, setCategory, setQuizQuestions } = useQuizContext();
  const user = useUser();

  if (!user) return <Navigate to="welcome" />;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getQuiz(category);
      setQuizQuestions(data);
    };
    fetchData();
  }, [category]);



  return <div className={styles.Dashboard}>
    <DashboardButton value={'node'} onClick={(e) => setCategory(e.target.value)}
    >Node
    </DashboardButton>
    {/* <DashboardButton onClick={}>CSS</DashboardButton>
    <DashboardButton onClick={}>JavaScript</DashboardButton>
    <DashboardButton onClick={}>React</DashboardButton>
    <DashboardButton onClick={}>Node</DashboardButton>
    <DashboardButton onClick={}>DS&A</DashboardButton> */}


  </div>;

}
