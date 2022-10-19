import { useState } from 'react';
import CustomButton from '../components/Buttons/CustomButton';
import styles from './QuizCard.module.scss';

export default function QuizCard({ 
  card, 
  userAnswer, 
  setUserAnswer, 
  answersArray,
  currentQuestion }) {

  const [rightAnswer, setRightAnswer] = useState(false);

  // initialState
  // correctAnswerState
  // wrongState
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
  
  // useEffect(() => {
  //   const fetchCorrect = async () => {
  //     await handleCompareAnswer();
  //   };
  //   fetchCorrect();
  // }, [userAnswer]);
  
  const handleCompareAnswer = async (answer) => {
    console.log('currentQuestion line 37', currentQuestion);
    console.log('answer line 38', answer);
    console.log('answersArray[currentQuestion]', answersArray[currentQuestion]);
    console.log(answer === answersArray[currentQuestion]);
    if (answersArray.length > 0 
      && answer === answersArray[currentQuestion]) {
      setRightAnswer(true);
    } else {
      setRightAnswer(false);
    }
  };
  console.log('rightAnswer', rightAnswer);

  const buttonBackground = (userAnswer, rightAnswer, buttonAnswer) => {
    if (userAnswer === null) {
      return 'white';
    } else if (buttonAnswer === answersArray[currentQuestion]) {
      return 'chartreuse';     
    } else if (userAnswer === buttonAnswer){
      return 'red';
    } else {
      return 'white';
    }
  };

  return (
    <div className={styles.QuizCard}>
      <h2>{question}</h2>
      
      
      <CustomButton 
        value={choice_one} 
        onClick={handleClick}
        style={{ backgroundColor: 
            buttonBackground(userAnswer, rightAnswer, choice_one) }} 
        disabled={userAnswer === null ? false : true}
      >
        {choice_one}
      </CustomButton>

      <CustomButton 
        value={choice_two} 
        onClick={handleClick}
        style={{ backgroundColor: 
          buttonBackground(userAnswer, rightAnswer, choice_two) }}
        disabled={userAnswer === null ? false : true}
      >
        {choice_two}
        
      </CustomButton>

      <CustomButton 
        value={choice_three} 
        onClick={(e) => setUserAnswer(e.target.value)}
        style={{ backgroundColor: 
          buttonBackground(userAnswer, rightAnswer, choice_three) }}
        disabled={userAnswer === null ? false : true}
      >
        {choice_three}
      </CustomButton>

      <CustomButton 
        value={choice_four} 
        onClick={(e) => setUserAnswer(e.target.value)}
        style={{ backgroundColor: 
          buttonBackground(userAnswer, rightAnswer, choice_four) }}
        disabled={userAnswer === null ? false : true}
      >
        {choice_four}
      </CustomButton>
    </div>
  );
}
