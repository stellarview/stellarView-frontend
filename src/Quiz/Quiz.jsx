import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { QuizButton } from '../components/Buttons/CustomButton';
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
      // console.log('data', data);
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
      />;
    }
  };

  return (
    <div className={styles.Quiz}>
      {getQuestionContent(quizQuestions)}
      <QuizButton  
        onClick={() => {
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
      </QuizButton>
    </div>
  );
}
