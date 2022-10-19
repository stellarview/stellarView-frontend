import { QuizButton } from '../components/Buttons/CustomButton';
import styles from './QuizCard.module.scss';

export default function QuizCard({ card }) {

  const { question, 
    choice_one, 
    choice_two, 
    choice_three, 
    choice_four } = card;

  return (
    <div className={styles.QuizCard}>
      <h2>{question}</h2>
      <QuizButton>{choice_one}</QuizButton>
      <QuizButton>{choice_two}</QuizButton>
      <QuizButton>{choice_three}</QuizButton>
      <QuizButton>{choice_four}</QuizButton>
    </div>
  );
}
