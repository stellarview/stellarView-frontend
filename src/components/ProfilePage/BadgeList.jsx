import styles from './BadgeList.module.scss';

export default function BadgeList({ category }) {

  return (
    <ul className={styles.BadgeList}>
      <li>{category}</li>
      <li>{category}</li>
      <li>{category}</li>
    </ul>
  );
}
