import CustomButton from '../Buttons/CustomButton';
import RocketLoader from '../Loaders/RocketLoader';
import styles from './ScorePage.module.scss';


export default function ScorePage() {
  return (
    <div className={styles.ScorePage}>
      <RocketLoader />
      <CustomButton>Keep studying</CustomButton>
    </div>
  );
}
