import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomButton from '../Buttons/CustomButton';
import { getQuiz } from '../../services/quiz';
import { useQuizContext } from '../../state/QuizContext';
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
  const [isWrong, setIsWrong] = useState([]);
  const [isWrongAnswer, setIsWrongAnswer] = useState([]);


  // const [points, setPoints] = useState(0)

  const navigate = useNavigate();

  /* Tell me about a time you had to decide between two features:
    Deciding to not use an Authoritative Client? Server? in our quiz database
    it was a tradeoff of best practice for reaching our MVP, and was justified
    by this not being a true game - it's a study aid, so the user is hurting 
    themselves by looking for the "easy win"
   */

  useEffect(() => {
    const fetchQuestions = async () => {
      setCategory(category);
      const { data } = await getQuiz(category);
      console.log('data', data);
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

  const checkIsWrong = () => {
    console.log('quizQuestions', quizQuestions);
    console.log('isWrong', isWrong);
    setCurrentQuestion(0);
    setQuizQuestions(isWrong);
    setAnswersArray(isWrongAnswer);
    setIsWrongAnswer([]);
    setIsWrong([]);
    if (isWrong.length === 0) {
      navigate('score-page');
    }
  }; 

  return (
    <div className={styles.Quiz}>
      {getQuestionContent(quizQuestions)}
      <CustomButton  
        onClick={() => {
          
          console.log('current question', currentQuestion);
          console.log(quizQuestions.length);
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
