import styles from './BadgeList.module.scss';

export default function BadgeList({ category }) {

  return (
    <ul className={styles.BadgeList}>
      {category.map((badge) => (
        <li key={badge.id}>
          {badge}
        </li>
      ))}
    </ul>
  );
}
