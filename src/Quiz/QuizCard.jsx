import CustomButton from '../components/Buttons/CustomButton';
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
      <CustomButton>{choice_one}</CustomButton>
      <CustomButton>{choice_two}</CustomButton>
      <CustomButton>{choice_three}</CustomButton>
      <CustomButton>{choice_four}</CustomButton>
    </div>
  );
}
