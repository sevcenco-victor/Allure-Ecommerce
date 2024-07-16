import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import styles from './Dropdown.module.css';

const Dropdown = ({ children }) => {
  const [sortBy, setSortBy] = useState('');

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropBtn}>
        <p>Sort By</p> <IoIosArrowDown />
      </button>
      <div className={styles.dropdownContent}>{children}</div>
    </div>
  );
};

export default Dropdown;
