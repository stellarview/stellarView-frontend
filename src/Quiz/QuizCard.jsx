import { useState } from 'react';
import CustomButton from '../components/Buttons/CustomButton';
import styles from './QuizCard.module.scss';

export default function QuizCard({ 
  card, 
  userAnswer, 
  setUserAnswer, 
  correctAnswer,
}) {

  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  // isCorrectAnswer, setIsCorrectAnswer

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
  
  const handleCompareAnswer = async (answer) => {
    console.log(answer === correctAnswer);
    if (correctAnswer.length > 0 
      && answer === correctAnswer) {
      setIsCorrectAnswer(true);
    } else {
      setIsCorrectAnswer(false);
    }
  };

  const buttonBackground = (userAnswer, isCorrectAnswer, buttonAnswer) => {
    if (userAnswer === null) {
      return 'white';
    } else if (buttonAnswer === correctAnswer) {
      return 'chartreuse'; 
      /* 
      Execute Confetti Rain!
      */  
    } else if (userAnswer === buttonAnswer){
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
      
      <CustomButton 
        value={choice_one} 
        onClick={handleClick}
        style={{ backgroundColor: 
            buttonBackground(userAnswer, isCorrectAnswer, choice_one) }} 
        disabled={userAnswer === null ? false : true}
      >
        {choice_one}
      </CustomButton>

      <CustomButton 
        value={choice_two} 
        onClick={handleClick}
        style={{ backgroundColor: 
          buttonBackground(userAnswer, isCorrectAnswer, choice_two) }}
        disabled={userAnswer === null ? false : true}
      >
        {choice_two}
      </CustomButton>

      <CustomButton 
        value={choice_three} 
        onClick={(e) => setUserAnswer(e.target.value)}
        style={{ backgroundColor: 
          buttonBackground(userAnswer, isCorrectAnswer, choice_three) }}
        disabled={userAnswer === null ? false : true}
      >
        {choice_three}
      </CustomButton>

      <CustomButton 
        value={choice_four} 
        onClick={(e) => setUserAnswer(e.target.value)}
        style={{ backgroundColor: 
          buttonBackground(userAnswer, isCorrectAnswer, choice_four) }}
        disabled={userAnswer === null ? false : true}
      >
        {choice_four}
      </CustomButton>
    </div>
  );
}
