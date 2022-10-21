import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomButton from '../Buttons/CustomButton';
import { getQuiz } from '../../services/quiz';
import { useQuizContext } from '../../state/QuizContext';
import QuizCard from './QuizCard';
import styles from './Quiz.module.scss';
import { updateCompletedCategories } from '../../services/users';
import { useUser } from '../../state/UserContext';

export default function Quiz() {
  const { category, level } = useParams();
  const [answersArray, setAnswersArray] = useState([]);
  const [userAnswer, setUserAnswer] = useState(null);
  const { quizQuestions, 
    setQuizQuestions, 
    setCategory } = useQuizContext();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isWrong, setIsWrong] = useState([]);
  const [isWrongAnswer, setIsWrongAnswer] = useState([]);
  const user = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      setCategory(category);
      const { data } = await getQuiz(category, level);
      setQuizQuestions(data);
      data.map((correct) => {
        setAnswersArray(answersArray => 
          [...answersArray, correct.correct_answer]);
      });
    };
    fetchQuestions();
  }, [category]);

  const getQuestionContent = questions => {
    if (questions.length > 0) {
      return <QuizCard 
        card={questions[currentQuestion]}
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer}
        correctAnswer={answersArray[currentQuestion]}
        currentQuestion={currentQuestion}
        quizQuestions={quizQuestions}
        setQuizQuestions={setQuizQuestions}
        isWrong={isWrong}
        setIsWrong={setIsWrong}
        isWrongAnswer={isWrongAnswer}
        setIsWrongAnswer={setIsWrongAnswer}
      />;
    }
  };

  const sendUserStatUpdates = async () => {
    const statUpdates = { completed_categories: category, total_points: 5 };
    await updateCompletedCategories(user.id, statUpdates);
  };

  const checkIsWrong = () => {
    setCurrentQuestion(0);
    setQuizQuestions(isWrong);
    setAnswersArray(isWrongAnswer);
    setIsWrongAnswer([]);
    setIsWrong([]);
    if (isWrong.length === 0) {
      sendUserStatUpdates();
      navigate('/quiz/score-page');
    }
  }; 

  return (
    <div className={styles.Quiz}>
      {getQuestionContent(quizQuestions)}
      <CustomButton  
        onClick={() => {          
          currentQuestion < quizQuestions.length - 1
            ? setCurrentQuestion(currentQuestion + 1)
            : checkIsWrong();
          
          setUserAnswer(null);
        }}
        style={{
          backgroundColor: 'midnightblue',
          color: 'white'
        }} 
        disabled={userAnswer === null ? true : false}
      > 
      Continue
      </CustomButton>
    </div>
  );
}
