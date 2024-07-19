import { useState } from 'react';
import styles from './Toggle.module.css';
const Toggle = ({ isCheck, handleIsCheck }) => {
  return (
    <button
      className={`${styles.toggle} ${isCheck ? styles.toggleCheck : ''}`}
      onClick={() => handleIsCheck(!isCheck)}
    >
      <div
        className={`${styles.togglePoint} ${
          isCheck ? styles.togglePointCheck : ''
        }`}
      />
    </button>
  );
};

export default Toggle;
