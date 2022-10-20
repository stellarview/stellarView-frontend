import rocketSpinner from '../../assets/rocket_animation.gif';
import styles from './RocketLoader.module.scss';

export default function RocketLoader() {
  return (
    <div className={styles.RocketLoader}>
      <img src={rocketSpinner} alt="loading..."/>
    </div>
  );
}
