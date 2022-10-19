import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomButton from '../components/Buttons/CustomButton';
import { getQuiz } from '../services/quiz';
import { useQuizContext } from '../state/QuizContext';
import QuizCard from './QuizCard';
import styles from './Quiz.module.scss';


export default function Quiz() {
  const { category } = useParams();
  const [answersArray, setAnswersArray] = useState([]);
  const [userAnswer, setUserAnswer] = useState(null);
  const { quizQuestions, 
    setQuizQuestions, 
    setCategory } = useQuizContext();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      setCategory(category);
      const { data } = await getQuiz(category);
      // console.log('data', data);
      setQuizQuestions(data);
      data.map((correct) => {
        setAnswersArray(answersArray => 
          [...answersArray, correct.correct_answer]);
      });
    };
    fetchQuestions();
  }, [category]);
  console.log('line 31 userAnswer', userAnswer);
  console.log('answersArray', answersArray);

  const getQuestionContent = questions => {
    if (questions.length > 0) {
      return <QuizCard 
        card={questions[currentQuestion]}
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer}
        answersArray={answersArray[currentQuestion]}
        currentQuestion={currentQuestion}
      />;
    }
  };

  return (
    <div className={styles.Quiz}>
      {getQuestionContent(quizQuestions)}  
            
      <CustomButton  
        onClick={() => {
          console.log('userAnswer', userAnswer);
          setCurrentQuestion(currentQuestion + 1);
          setUserAnswer(null);

        }}
        style={{
          backgroundColor: 'midnightblue',
          color: 'white'
        }} 
        disabled={userAnswer === null ? true : false}
      > 
      Next Question
      </CustomButton>

    </div>
  );
}
