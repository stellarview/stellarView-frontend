import classnames from 'classnames';
import styles from '../Buttons/CustomButton.module.scss';

export default function CustomButton({ children, ...rest }) {
  const className = classnames(styles.CustomButton);
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}

// quiz button
