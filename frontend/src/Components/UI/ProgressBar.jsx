import styles from './ProgressBar.module.css';

const ProgressBar = ({ value }) => {
  return (
    <progress className={styles.progressBar} min={0} value={value} max={100} />
  );
};

export default ProgressBar;
