import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { QuizButton } from '../components/Buttons/CustomButton';
import { getQuiz } from '../services/quiz';
import { useQuizContext } from '../state/QuizContext';
import QuizCard from './QuizCard';
import styles from './Quiz.module.scss';


export default function Quiz() {
  const { category } = useParams();
  const { quizQuestions, setQuizQuestions, setCategory } = useQuizContext();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      setCategory(category);
      const data = await getQuiz(category);
      setQuizQuestions(data.data);
    };
    fetchQuestions();
  }, [category]);

  const getQuestionContent = questions => {
    if (questions.length > 0) {
      return <QuizCard 
        card={questions[currentQuestion]}
      />;
    }
  };
  return (
    <div className={styles.Quiz}>
      {getQuestionContent(quizQuestions)}
      <QuizButton  
        onClick={() => setCurrentQuestion(currentQuestion + 1)}
        style={{
          backgroundColor: 'midnightblue',
          color: 'white'
        }} > 
      Next Question
      </QuizButton>
    </div>
  );
}
