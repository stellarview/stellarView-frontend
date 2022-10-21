import { useState } from 'react';
import { QuizButton } from '../Buttons/CustomButton';
import styles from './QuizCard.module.scss';

export default function QuizCard({ 
  card, 
  userAnswer, 
  setUserAnswer, 
  correctAnswer,
  isWrong,
  setIsWrong,
  isWrongAnswer,
  setIsWrongAnswer
}) {

  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const { question, 
    choice_one, 
    choice_two, 
    choice_three, 
    choice_four } = card;

  const handleClick = (e) => {
    setUserAnswer(e.target.value);
    handleCompareAnswer(e.target.value);
  };
  
  const handleCompareAnswer = (answer) => {
    if (answer === correctAnswer) {
      setIsCorrectAnswer(true);
    } else {
      console.log('isWrong', isWrong);
      setIsCorrectAnswer(false);
      setIsWrong([...isWrong, card]);
      setIsWrongAnswer([...isWrongAnswer, correctAnswer]);
    }
    
  };

  const buttonBackground = (userAnswer, isCorrectAnswer, buttonAnswer) => {
    if (userAnswer === null) {
      return 'white';
    } else if (buttonAnswer === correctAnswer) {
      return 'chartreuse'; 
    } else if (userAnswer === buttonAnswer) {
      return 'red';
    } else {
      return 'white';
    }
  };

  /* Normalize our data structure.*/

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

      { choice_three 
        ? <QuizButton 
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
        : <></>
      }
      { choice_four 
        ? <QuizButton 
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
        : <></>
      }
    </div>
  );
}
