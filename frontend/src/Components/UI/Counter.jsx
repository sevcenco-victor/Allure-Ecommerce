import styles from './Counter.module.css';

const Counter = ({ counter, setCounter }) => {
  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  return (
    <div className={`${styles.counter} d-flex-row gap-m`}>
      <button className={styles.counterBtn} onClick={handleDecrement}>
        -
      </button>
      <p>{counter}</p>
      <button className={styles.counterBtn} onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Counter;
