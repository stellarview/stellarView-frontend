import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//do we need an outlet?
import styles from './Dashboard.module.scss';
import { useUser } from '../../state/UserContext.jsx';
import { DashboardButton } from '../Buttons/CustomButton';
import { useQuizContext } from '../../state/QuizContext';

export default function Dashboard() {
  const user = useUser();
  // const [displayCategories, setDisplayCategories] = useState('');

  if (!user) return <Navigate to="welcome" />;

  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     const data = await getCategories();
  //     setDisplay(data);
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
