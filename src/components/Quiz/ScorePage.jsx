import CustomButton from '../Buttons/CustomButton';
import styles from './ScorePage.module.scss';
import thumbsupAlien from '../../assets/thumbs-up-alien.png';
import JSConfetti from 'js-confetti';
import { useNavigate } from 'react-router-dom';

export default function ScorePage() {
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti({
    emojis: ['✨', '⚡️', '🪐', '💥', '✨'],
    confettiNumber: 50,
    confettiRadius: 10,
  });

  const navigate = useNavigate();

  const handleClick = async () => {
    navigate('dashboard');
  };

  return (
    <div className={styles.ScorePage}>
      <h1>Stellar Work! <br></br> You finished a level</h1>
      <img src={thumbsupAlien}></img>
      <CustomButton onClick={handleClick}>Keep Learning</CustomButton>
    </div>
  );
}
