import styles from './Button.module.css';
const Button = ({ type, text, color, children, onClick, category }) => {
  return (
    <button
      type={type}
      onClick={onClick ? (e) => onClick(e) : null}
      className={`${styles.btn} ${
        category === 'primary' ? styles.primaryBtn : styles.secondaryBtn
      } ${color === 'white' ? styles.white : ''}`}
    >
      {children || text}
    </button>
  );
};

export default Button;
