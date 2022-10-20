import { useState } from 'react';
import { QuizButton } from '../Buttons/CustomButton';
import styles from './QuizCard.module.scss';

export default function QuizCard({ 
  card, 
  userAnswer, 
  setUserAnswer, 
  correctAnswer,
  quizQuestions,
  setQuizQuestions,
  isWrong,
  setIsWrong,
  isWrongAnswer,
  setIsWrongAnswer
}) {

  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  // normalize this data on the backend "stretch"
  const { question, 
    choice_one, 
    choice_two, 
    choice_three, 
    choice_four } = card;

  const handleClick = (e) => {
    setUserAnswer(e.target.value);
    handleCompareAnswer(e.target.value);
    console.log('e.target.value', e.target.value);
  };
  
  const handleCompareAnswer = (answer) => {
    console.log('answer', answer, correctAnswer);
    if (answer.trim() === correctAnswer.trim()) {
      setIsCorrectAnswer(true);
    } else {
      console.log('isWrong', isWrong);
      // console.log('isCorrectAnswer', isCorrectAnswer);
      setIsCorrectAnswer(false);
      // console.log('card', card);
      setIsWrong([...isWrong, card]);
      setIsWrongAnswer([...isWrongAnswer, correctAnswer]);
      // setQuizQuestions();
      // quizQuestions.map((quiz) => {
      //   setQuizQuestions(quizQuestions => 
      //     [...quizQuestions, quiz]);
      // });
    }
    
  };



  // console.log('line 44', quizQuestions);

  // console.log('card', card);

  const buttonBackground = (userAnswer, isCorrectAnswer, buttonAnswer) => {
    if (userAnswer === null) {
      return 'white';
    } else if (buttonAnswer.trim() === correctAnswer.trim()) {
      return 'chartreuse'; 
      /* 
      Execute Confetti Rain!
      */  
    } else if (userAnswer.trim() === buttonAnswer.trim()) {
      return 'red';
    } else {
      return 'white';
    }
  };

  /* Normalizing our data structure will allow us to map through the data to 
render a button for each option, rather than having multiple buttons hardcoded, 
which would reduce the amount of code modification needed for updates,
refactors, etc.
*/

  return (
    <div className={styles.QuizCard}>
      <h2>{question}</h2>
      
      <QuizButton 
        value={choice_one} 
        onClick={handleClick}
        style={{
          backgroundColor: buttonBackground(
            userAnswer, isCorrectAnswer, choice_one
          )
        }} 
        disabled={userAnswer === null ? false : true}
      >
        {choice_one}
      </QuizButton>

      <QuizButton 
        value={choice_two} 
        onClick={handleClick}
        style={{
          backgroundColor: buttonBackground(
            userAnswer, isCorrectAnswer, choice_two
          )
        }}
        disabled={userAnswer === null ? false : true}
      >
        {choice_two}
      </QuizButton>

      <QuizButton 
        value={choice_three} 
        onClick={(e) => setUserAnswer(e.target.value)}
        style={{
          backgroundColor: buttonBackground(
            userAnswer, isCorrectAnswer, choice_three
          )
        }}
        disabled={userAnswer === null ? false : true}
      >
        {choice_three}
      </QuizButton>

      <QuizButton 
        value={choice_four} 
        onClick={(e) => setUserAnswer(e.target.value)}
        style={{
          backgroundColor: buttonBackground(
            userAnswer, isCorrectAnswer, choice_four
          )
        }}
        disabled={userAnswer === null ? false : true}
      >
        {choice_four}
      </QuizButton>
    </div>
  );
}
